import React from 'react'
import Banner from '../homecomponents/Banner'
import AboutWoolf from '../homecomponents/AboutWoolf'
import Embrace from '../homecomponents/Embrace'
import Eligibility from '../homecomponents/Eligibility'
import ProgramCurriculum from '../homecomponents/ProgramCurriculum'
import AcademicTeam from '../homecomponents/AcademicTeam'
import ApplyNow from '../homecomponents/ApplyNow'
import Footer from '../homecomponents/Footer'
import ChooseWoolf from '../homecomponents/ChooseWoolf'
import { Helmet } from "react-helmet";

function HomeScreen() {
  return (
    <>
    <Helmet>
    <title>Master in Data Science in Woolf - Airtics</title>
    </Helmet>
    <Banner />
    <AboutWoolf />
    <Embrace />
    <ChooseWoolf />
    <Eligibility />
    <ProgramCurriculum />
    <AcademicTeam />
    <ApplyNow />
    <Footer />
    </>
  )
}

export default HomeScreen