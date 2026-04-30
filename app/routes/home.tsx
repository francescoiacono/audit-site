import { getCopy, useCopy } from "@/shared/i18n";
import { Wrapper } from "@/shared/ui";
import { SiteHeader } from "@/verticals/site-header";

const pageCopy = getCopy();

/** Defines metadata for the home route. */
export const meta = () => [{ title: pageCopy.home.metaTitle }];

/** Renders the home page content. */
const Home = () => {
  const copy = useCopy();

  return (
    <>
      <SiteHeader />
      <Wrapper as="main">{copy.home.body}</Wrapper>
    </>
  );
};

export default Home;
