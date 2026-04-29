FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.33.2 --activate

FROM base AS dependencies

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

FROM base AS production-dependencies

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --prod --frozen-lockfile --ignore-scripts

FROM base AS build

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN pnpm exec panda codegen && pnpm build

FROM base AS production

ENV NODE_ENV="production"
ENV PORT="3000"
ENV HOST="0.0.0.0"

COPY package.json ./
COPY public ./public
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["pnpm", "start"]
