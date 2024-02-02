import React from "react";
import { Container } from "react-bootstrap";
import loc from "../images/placeholder.png";
import call from "../images/telephone.png";
import send from "../images/send.png";
import insta from "../images/instagram.png";
import fb from "../images/facebook.png";
import t from "../images/twitter.png";
import linkdn from "../images/linkedin.png";
function Footer() {
  const handleAboutWoolfScroll = () => {
    const AboutWoolf = document.getElementById("aboutwoolf");
    if (AboutWoolf) {
      AboutWoolf.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCurriculumScroll = () => {
    const Curriculum = document.getElementById("curriculum");
    if (Curriculum) {
      Curriculum.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleToolsScroll = () => {
    const Tools = document.getElementById("tools");
    if (Tools) {
      Tools.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFacultyScroll = () => {
    const Faculty = document.getElementById("faculty");
    if (Faculty) {
      Faculty.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <Container fluid className="bg-[#01051C] py-5">
      <div className="max-w-[1200px] m-auto flex-wrap">
        <div>
          <span className="text-white font-[Raleway] font-semibold">
            Connect with us
          </span>
        </div>
        <div className="my-10 flex justify-between gap-3 flex-wrap">
          <div className="flex gap-5 flex-wrap">
            <div className="flex gap-4 items-center">
              <img
                              src={loc}

                alt=""
                className="max-w-5"
              />
              <span class="font-[Raleway] text-sm text-white">
                7<sup>th</sup> Floor, City Gate Tower, Al Ittihad Road, Al
                Taawun, Sharjah, UAE
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={call}
                alt=""
                className="max-w-5"
              />
              <span class="font-[Raleway] text-sm text-white">
                +971 6 745 2556
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={send}
                alt=""
                className="max-w-5"
              />
              <span class="font-[Raleway] text-sm text-white">
                info@airtics.org
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={insta}
              alt=""
              className="max-w-5"
            />
            <img
              src={fb}
              alt=""
              className="max-w-5"
            />
            <img
              src={t}
              alt=""
              className="max-w-5"
            />
            <img
              src={linkdn}
              alt=""
              className="max-w-5"
            />
          </div>
        </div>
      </div>
    </Container>
    <Container fluid className="bg-[#040B2B] py-4">
        
      <div className="max-w-[1200px] m-auto py-2 flex justify-between flex-row  flex-wrap items-center">
        <div>
          <img
            src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-white-only.svg"
            alt=""
            width="170"
            height="39"
          />
        </div>
        <div className="flex gap-4 text-white p-4 flex-wrap">
          <div className="flex gap-4">
            <span
              className="text-base cursor-pointer"
              onClick={handleAboutWoolfScroll}
            >
              Why This Program
            </span>
          </div>
          <div className="flex gap-4">
            <span
              className="text-base cursor-pointer"
              onClick={handleCurriculumScroll}
            >
              Curriculum
            </span>
          </div>
          <div className="flex gap-4">
            <span
              className="text-base cursor-pointer"
              onClick={handleToolsScroll}
            >
              Course Delivery
            </span>
          </div>
          <div className="flex gap-4">
            <span
              className="text-base cursor-pointer"
              onClick={handleFacultyScroll}
            >
              Exit Pathways
            </span>
          </div>
        </div>
        <div>
          <button
            className="bg-[#35D1DE] text-[#0C1051] rounded-[50px] font-bold font-[Raleway] w-[127px] h-[48px]"
            variant=""
          >
            Register Now
          </button>
        </div>
      </div>
    </Container>
    <Container fluid className="bg-[#01051C] py-4">
      <div className="max-w-[1200px] m-auto">
      <p className="text-white">Copyright © 2024 All Rights Reserved.</p>
      </div>
    </Container>
      </>
  );
}

export default Footer;
