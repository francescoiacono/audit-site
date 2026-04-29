import { Wrapper } from "../shared/ui";

/** Defines metadata for the home route. */
export const meta = () => [{ title: "hello world" }];

/** Renders the home page content. */
const Home = () => {
  return <Wrapper as="main">hello world</Wrapper>;
};

export default Home;
