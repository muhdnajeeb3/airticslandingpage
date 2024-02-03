import React from "react";
import Banner from "../pgdiplomadsandaicomponents/Banner";
import WhyChoose from "../pgdiplomadsandaicomponents/WhyChoose";
import AboutUcam from "../pgdiplomadsandaicomponents/AboutUcam";
import WhatyouwillLearn from "../pgdiplomadsandaicomponents/WhatyouwillLearn";
import ExitPathways from "../pgdiplomadsandaicomponents/ExitPathways";
import AcademicTeam from "../pgdiplomadsandaicomponents/AcademicTeam";
import Footer from "../pgdiplomadsandaicomponents/Footer";
import { Helmet } from "react-helmet";

function PgDsAndAI() {
  return (
    <>
      <Helmet>
      <title>PG Diploma in Data Science and AI - Landing Page - Airtics</title>
      </Helmet>
      <Banner />
      <WhyChoose />
      <AboutUcam />
      <WhatyouwillLearn />
      <ExitPathways />
      <AcademicTeam />
      <Footer />
    </>
  );
}

export default PgDsAndAI;
