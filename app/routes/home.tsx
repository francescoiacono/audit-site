import { getCopy } from "@/shared/i18n";
import { Hero } from "@/verticals/hero";
import { SiteHeader } from "@/verticals/site-header";

const pageCopy = getCopy();

/** Defines metadata for the home route. */
export const meta = () => [{ title: pageCopy.home.metaTitle }];

/** Renders the home page content. */
const Home = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
