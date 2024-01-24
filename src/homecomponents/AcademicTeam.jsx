import React from "react";
import { Container, Row } from "react-bootstrap";

function AcademicTeam() {
  return (
    <Container fluid className="bg-white min-h-[300px] py-[2rem]" id="faculty">
      <Row className="max-w-[1200px] m-auto">
        <span className="text-black font-bold md:text-4xl text-2xl">
          ACADEMIC TEAM
        </span>
      </Row>
      <div className="max-w-[1200px] mx-auto flex gap-6 flex-wrap justify-center my-[2rem]">
        <div className="w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/vivek.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Dr. Vivek Mohan</span>
            <span className="text-xs text-center">Dean - Academic and Student Affairs</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/piyali.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Mrs. Piyali Mondal</span>
            <span className="text-xs text-center">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/3.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Ms. Rahima Jahangir</span>
            <span className="text-xs text-center">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/4.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Diya Liza Varghese</span>
            <span className="text-xs text-center">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/5.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Pranav Chandaliya</span>
            <span className="text-xs text-center">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/6-1.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Chirantan Lonkar</span>
            <span className="text-xs text-center">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/7.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Milan</span>
            <span className="text-xs text-center">Faculty</span>
          </div>
        </div>
        <div className="max-w-[127px] p-0">
          <div>
            <img
              decoding="async"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/8-1.png"
              alt=""
              className="max-w-[127px]"
            />
          </div>
          <div className="flex flex-col p-[4px] mt-1">
            <span className="font-bold text-xs text-center">Shantanu Pradyut Chakraborty</span>
            <span className="text-xs text-center">Faculty</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AcademicTeam;
