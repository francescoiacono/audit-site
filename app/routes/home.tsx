import { getCopy, useCopy } from "@/shared/i18n";
import { SkipLink } from "@/shared/ui";
import { Hero } from "@/verticals/hero";
import { Services } from "@/verticals/services";
import { SiteHeader } from "@/verticals/site-header";

const pageCopy = getCopy();

/** Defines metadata for the home route. */
export const meta = () => [{ title: pageCopy.home.metaTitle }];

/** Renders the home page content. */
const Home = () => {
  const { site } = useCopy();

  return (
    <>
      <SkipLink href="#main-content">{site.skipToMainContentLabel}</SkipLink>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
      </main>
    </>
  );
};

export default Home;
