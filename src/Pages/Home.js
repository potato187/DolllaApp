import Footer from "Components/Footer";
import Header from "Components/Header";
import HeroSection from "Components/HeroSection";
import InfoSection from "Components/InfoSection";
import Services from "Components/Services";
import { DiscoverObject, InfoObject, SignInObject } from "Data";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfoSection {...InfoObject} />
      <InfoSection {...DiscoverObject} />
      <Services />
      <InfoSection {...SignInObject} />
      <Footer />
    </>
  );
}

export default Home;
