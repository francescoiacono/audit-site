import { Wrapper } from "../shared/ui";
import { SiteHeader } from "../verticals/site-header";

/** Defines metadata for the home route. */
export const meta = () => [{ title: "hello world" }];

/** Renders the home page content. */
const Home = () => {
  return (
    <>
      <SiteHeader />
      <Wrapper as="main">hello world</Wrapper>
    </>
  );
};

export default Home;
