import React from "react";
import { Container } from "react-bootstrap";

function WhatyouwillLearn() {
  return (
    <Container fluid className="border-t  bg-[#0C1051]" id="pgcurriculum">
      <div className="max-w-[1200px] mx-auto py-14 flex flex-col md:flex-row items-center gap-5 lg:gap-0">
        <div className="flex-1">
          <img
            src="	https://ad.airtics.org/wp-content/uploads/2023/11/what-you-will-learn.png"
            alt=""
          />
        </div>
        <div className="flex-[2]">
          <span className="text-[#40C3D5] text-3xl lg:text-7xl font-[900] font-[raleway]">
            WHAT YOU <br />
            WILL LEARN
          </span>
          <div className="mt-7 mb-[4rem]">
            <table className="w-full  ">
              <tr className="">
                <th className="text-[#40C3D5] text-lg md:text-2xl font-[roboto]">
                  PART 1: Core Section
                </th>
                <th className="text-[#40C3D5] text-lg md:text-2xl font-[roboto]">
                  ECTS
                </th>
              </tr>
              <tr>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg text-white font-[roboto]">
                  Core and Advance Python
                </td>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  6
                </td>
              </tr>
              <tr>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  Math and Stat for Data Science
                </td>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  6
                </td>
              </tr>
              <tr>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  Data Analytics using Business Intelligence Tools
                </td>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  8
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-7 mb-[4rem]">
            <table className="w-full  ">
              <tr className="">
                <th className="text-[#40C3D5] text-lg md:text-2xl font-[roboto]">
                  PART 2: Specialization Module
                </th>
                <th className="text-[#40C3D5] text-lg md:text-2xl font-[roboto]">
                  ECTS
                </th>
              </tr>
              <tr>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg text-white font-[roboto]">
                  Core and Advance Python
                </td>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  6
                </td>
              </tr>
              <tr>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  Math and Stat for Data Science
                </td>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  6
                </td>
              </tr>
              <tr>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  Data Analytics using Business Intelligence Tools
                </td>
                <td className="border-b-[1px] border-solid border-white py-1 text-lg  text-white font-[roboto]">
                  8
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-7 mb-[4rem]">
            <table className="w-full  ">
              <tr className="">
                <th className="text-[#40C3D5] text-lg md:text-2xl font-[roboto]">
                  PART 3: Capstone project (9 ECTS)
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div
        className="max-w-[1200px] mx-auto py-14 flex flex-col  items-center justify-center gap-5 lg:gap-0"
        id="coursedelivery"
      >
        <h2 className="text-[#40C3D5] font-[Raleway] text-3xl md:text-7xl font-[900] text-center">
          <span className="text-white">HOW IS THE COURSE</span>
          <br />
          DELIVERED?
        </h2>
        <div className="p-4 bg-gradient flex">
          <span className="text-base text-center font-[Raleway] text-white">
            Our unique approach combines hands-on learning with an interactive
            platform, industry case studies, real-world data sets, project-based
            assessments led by expert instructors, and tutor support. This
            holistic method allows learners to both acquire knowledge and apply
            it practically before entering the professional realm.
          </span>
        </div>
      </div>
    </Container>
  );
}

export default WhatyouwillLearn;
