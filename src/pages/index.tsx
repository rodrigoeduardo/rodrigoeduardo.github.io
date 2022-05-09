import type { NextPage } from "next";
import Head from "next/head";
import { AboutMeSection } from "../components/AboutMeSection";
import { HomeSection } from "../components/HomeSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Rodrigo Eduardo</title>
      </Head>
      <HomeSection />
      <AboutMeSection />
    </>
  );
};

export default Home;
