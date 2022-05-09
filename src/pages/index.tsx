import type { NextPage } from 'next';
import Head from 'next/head';
import { AboutMeSection } from '../components/AboutMeSection';
import { ContactSection } from '../components/ContactSection';
import { HomeSection } from '../components/HomeSection';
import { PortfolioSection } from '../components/PortfolioSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Rodrigo Eduardo</title>
        <link rel="shortcut icon" href="assets/favicon.png" />
      </Head>
      <HomeSection />
      <AboutMeSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default Home;
