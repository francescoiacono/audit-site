import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { styles } from "./root.style";

/** Props accepted by the root document layout. */
type LayoutProps = {
  /** Route content rendered inside the document body. */
  children: React.ReactNode;
};

/** Returns document-level link tags for React Router. */
export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

/** Renders the shared HTML document shell for every route. */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

/** Renders the currently matched route. */
const App = () => {
  return <Outlet />;
};

export default App;

/** Renders route errors with concise production-safe details. */
export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  // Map known route responses to clear messages, and show stack traces only in development.
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className={styles}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
};
