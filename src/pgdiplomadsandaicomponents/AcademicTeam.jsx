import React from "react";
import { Container, Row } from "react-bootstrap";

function AcademicTeam() {
  return (
    <Container fluid className="bg-[#0C1051] min-h-[300px] py-[5rem]" id="faculty">
      <Row className="max-w-[1200px] m-auto">
        <span className="text-[#40C3D5] font-[900] md:text-7xl text-2xl font-[Raleway] text-center">
          ACADEMIC TEAM
        </span>
      </Row>
      <div className="max-w-[1200px] mx-auto flex gap-6 flex-wrap justify-center my-[2rem]">
        <div className="w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/Dr.-Vivek.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Dr. Vivek Mohan</span>
            <span className="text-xs text-center text-[#99C1DA]">Dean - Academic and Student Affairs</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/Mrs.-piyali.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Mrs. Piyali Mondal</span>
            <span className="text-xs text-center text-[#99C1DA]">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="	https://ad.airtics.org/wp-content/uploads/2023/11/Ms.-Rahima.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Ms. Rahima Jahangir</span>
            <span className="text-xs text-center text-[#99C1DA]">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/pranav.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Pranav Chandaliya</span>
            <span className="text-xs text-center text-[#99C1DA]">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="	https://ad.airtics.org/wp-content/uploads/2023/11/chirantan.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Chirantan Lonkar</span>
            <span className="text-xs text-center text-[#99C1DA]">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/milan.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Milan</span>
            <span className="text-xs text-center text-[#99C1DA]">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/shantanu.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Shantanu Pradyut Chakraborty</span>
            <span className="text-xs text-center text-[#99C1DA]">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/diya_liza.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center text-white">Diya Liza Varghese</span>
            <span className="text-xs text-center text-[#99C1DA]">Faculty</span>
          </div>
        </div>
        <div className="my-5">
          <img src="https://ad.airtics.org/wp-content/uploads/2023/11/acadamic-line.png" alt="" />
        </div>
        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="flex flex-col">
            <span className="font-alex-brush text-white sm:text-7xl text-6xl sm:text-right mb-[-23px] z-1">
            Are you ready to
            </span>
            <span className="text-[#40C3D5] font-[Raleway] sm:text-7xl text-4xl font-[900]">
            GET STARTED?
            </span>
          </div>
          <div className="sm:w-[53%] pl-6 sm:flex sm:items-end">
            <span className="text-white pl-2 sm:border-l">Take the first step toward a data-driven future with our PG Diploma in Data Science and AI. Feel free to contact our team for personalized guidance.</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AcademicTeam;
