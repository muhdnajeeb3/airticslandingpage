import React from "react";
import { Container, Row } from "react-bootstrap";
import AA from "../images/accredetion.svg";
import CS from "../images/career.svg";
import TS from "../images/tailored.svg";
import IM from "../images/industry.svg";
import IL from "../images/web.svg";
function ChooseWoolf() {
  return (
    <Container fluid className="bg-[#FFF4E3]">
      <Row className="flex flex-col max-w-[1200px] mx-auto pt-12 mb-10 mt-10">
        <span className="text-[#ea9e25] font-bold md:text-4xl text-2xl mb-4">
          WHY CHOOSE WOOLF?
        </span>
      </Row>
      <div className="flex max-w-[1200px] mx-auto pb-14 mb-10 mt-10 flex-wrap gap-[7rem] justify-center">
        <div className="max-w-[206px] flex flex-col gap-2 items-center text-center">
          <div className="border-black border-2 p-4 rounded-[20px] max-w-[109px]">
            <img src={AA} alt="" />
          </div>
          <div>
            <span className="text-base text-center">
              Accreditation <br />& Alumni Benefits{" "}
            </span>
          </div>
        </div>
        <div className="max-w-[206px] flex flex-col gap-2 items-center text-center">
          <div className="border-black border-2 p-4 rounded-[20px] max-w-[109px]">
            <img src={CS} alt="" />
          </div>
          <div>
            <span className="text-base text-center">
              Career <br />
              Support{" "}
            </span>
          </div>
        </div>
        <div className="max-w-[206px] flex flex-col gap-2 items-center text-center">
          <div className="border-black border-2 p-4 rounded-[20px] max-w-[109px] h-[109px] flex items-center justify-center">
            <img src={IM} alt="" />
          </div>
          <div>
            <span className="text-base text-center">
              Three <br />
              Specializations{" "}
            </span>
          </div>
        </div>
        <div className="max-w-[206px] flex flex-col gap-2 items-center text-center">
          <div className="border-black border-2 p-3 rounded-[20px] max-w-[109px] h-[109px] flex items-center justify-center">
            <img src={TS} alt="" />
          </div>
          <div>
            <span className="text-base text-center">
              Industry <br />
              Mentors{" "}
            </span>
          </div>
        </div>
        <div className="max-w-[206px] flex flex-col gap-2 items-center text-center">
          <div className="border-black border-2 p-3 rounded-[20px] max-w-[109px] h-[109px] flex items-center justify-center">
            <img src={IL} alt="" />
          </div>
          <div>
            <span className="text-base text-center">
              Interactive <br />
              Live Sessions{" "}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ChooseWoolf;
