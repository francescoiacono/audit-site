import { ArrowRight } from "lucide-react";
import { useCopy } from "@/shared/i18n";
import { ButtonLink, Wrapper } from "@/shared/ui";
import { HeroVisual } from "./hero-visual";
import { styles } from "./hero.style";

/** Renders the landing page hero section. */
export const Hero = () => {
  const { hero } = useCopy();

  return (
    <section aria-labelledby="hero-title" className={styles}>
      <Wrapper data-slot="inner">
        <div data-slot="content">
          <h1 id="hero-title">{hero.title}</h1>
          <p data-slot="description">{hero.description}</p>
          <div data-slot="actions">
            <ButtonLink
              href={hero.primaryCta.href}
              iconMotion="slide-right"
              iconRight={<ArrowRight focusable="false" strokeWidth={2} />}
              size="lg"
            >
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <HeroVisual copy={hero.visual} />
      </Wrapper>
    </section>
  );
};
