import { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import nookies from "nookies";

import Logo from "@/assets/images/logo.svg";
import MenuIcon from "@/assets/images/icon-menu.svg";
import IllustrationWorking from "@/assets/images/illustration-working.svg";

import Button from "@/components/Button";
import AdvancedStatisticsList from "@/components/AdvancedStatisticsList";
import FooterMenuList from "@/components/FooterMenuList";
import SocialList from "@/components/SocialList";
import ShortenLinkForm from "@/components/ShortenLinkForm";
import NavigationMenu from "@/components/NavigationMenu";
import SavedLinksList from "@/components/SavedLinksList";

import { advancedStatistics } from "@/data/advanced-statistics";
import { footerNavLinks } from "@/data/footer-nav-links";

import {
  AdvancedStatistics,
  BoostContainer,
  Container,
  Footer,
  Header,
  Main,
  MainFirstContent,
  Hamburger,
} from "@/styles/pages/Home";

interface HomeProps {
  SAVED_LINKS: { original: string; short: string }[];
}

const Home: NextPage<HomeProps> = ({ SAVED_LINKS }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState(0);
  const [savedLinks, setSavedLinks] =
    useState<{ original: string; short: string }[]>(SAVED_LINKS);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    }
  }, []);

  return (
    <Container>
      <Head>
        <meta name="description" content="URL shortening API landing page" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/favicon.ico" />
        <title>Shortly</title>
      </Head>

      <Header>
        <Logo fontSize={135} height={35} />

        <Hamburger
          aria-label="Open Menu"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <MenuIcon fontSize={35} />
        </Hamburger>
        <NavigationMenu isHidden={isNavExpanded || windowSize > 860} />
      </Header>
      <Main>
        <MainFirstContent>
          <IllustrationWorking
            fontSize={340}
            width="100%"
            viewBox="0 0 520 482"
          />
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <Button aria-label="Get Started">Get Started</Button>
          </div>
        </MainFirstContent>
        <AdvancedStatistics>
          <ShortenLinkForm
            setSavedLinks={setSavedLinks}
            savedLinks={savedLinks}
          />

          <SavedLinksList savedLinks={savedLinks} />
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="advanced-statistics-list-container">
            <AdvancedStatisticsList data={advancedStatistics} />
          </div>
        </AdvancedStatistics>
        <BoostContainer>
          <p className="boost-title">Boost your links today</p>
          <Button aria-label="Get Started">Get Started</Button>
        </BoostContainer>
      </Main>
      <Footer>
        <div className="footer-container">
          <Logo fontSize={135} height={35} color="#FFF" />
          <div>
            <FooterMenuList data={footerNavLinks} />
            <SocialList />
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let cookies = nookies.get(ctx);

  let SAVED_LINKS: { original: string; short: string }[] = [];

  if (cookies.SAVED_LINKS) {
    SAVED_LINKS = JSON.parse(cookies.SAVED_LINKS);
  } else {
    nookies.set(ctx, "SAVED_LINKS", "[]", {
      maxAge: 86400 * 31,
      path: "/",
    });
  }

  return {
    props: {
      server: false,
      SAVED_LINKS,
    },
  };
};
