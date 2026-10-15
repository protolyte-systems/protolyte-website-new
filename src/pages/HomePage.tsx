import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import OfferingsSection from "../components/sections/OfferingsSection";
import ClientValueSection from "../components/sections/ClientValueSection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import Footer from "../components/layout/Footer";
import {
  caseStudies,
  clientStats,
  clientValuePoints,
  footerGroups,
  heroContent,
  navItems,
  offerings,
} from "../data/homeData";
import styles from "./HomePage.module.css";
import type { JSX } from "react";

function HomePage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />
      <main>
        <HeroSection content={heroContent} />
        {/* <LogoWallSection brands={trustedBrands} /> */}
        <OfferingsSection items={offerings} />
        <ClientValueSection stats={clientStats} bulletPoints={clientValuePoints} />
        <CaseStudiesSection studies={caseStudies} />
      </main>
      <Footer groups={footerGroups} />
    </div>
  );
}

export default HomePage;
