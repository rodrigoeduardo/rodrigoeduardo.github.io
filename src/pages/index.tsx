import type { NextPage } from "next";
import Head from "next/head";
import { AboutMeSection } from "../components/AboutMeSection";
import { HomeSection } from "../components/HomeSection";
import { PortfolioSection } from "../components/PortfolioSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Rodrigo Eduardo</title>
      </Head>
      <HomeSection />
      <AboutMeSection />
      <PortfolioSection />
    </>
  );
};

export default Home;
