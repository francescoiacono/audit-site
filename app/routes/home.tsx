import { Wrapper } from "../shared/ui";

/** Defines metadata for the home route. */
export function meta() {
  return [{ title: "hello world" }];
}

/** Renders the home page content. */
export default function Home() {
  return <Wrapper as="main">hello world</Wrapper>;
}
