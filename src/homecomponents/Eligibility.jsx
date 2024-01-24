import React from "react";
import { Container, Row } from "react-bootstrap";

function Eligibility() {
  return (
    <Container fluid className="min-h-[300px] pb-8">
      {/* eligibility */}
      <div className="max-w-[1200px] m-auto flex gap-2 items-end flex-wrap">
        <div className="max-w-[767px] flex-[2_1_500px]">
          <div className="max-w-[767px]">
            <span className="text-[#ea9e25] font-bold md:text-4xl text-2xl">
              ELIGIBILITY REQUIREMENTS
            </span>
          </div>
          <div className="bg-[#ea9e25] min-h-[271px] rounded-tr-[40px] max-w-[767px] mt-4 flex items-center p-1">
            <ul className="text-white text-base">
              <li className="pb-3 flex gap-3 items-center">
                <div className="min-w-3 h-3 border-2 border-white rounded-full"></div>
                <span>A bachelor’s degree in any discipline</span>
              </li>
              <li className="pb-3 flex gap-3 items-center">
                <div className="min-w-3 h-3 border-2 border-white rounded-full"></div>
                <span>
                  Proficiency in the English language equivalent to IELTS 6.0 or
                  equivalent.
                </span>
              </li>
              <li className="pb-3 flex gap-3 items-center">
                <div className="min-w-3 h-3 border-2 border-white rounded-full"></div>
                <span>
                  Learners without a bachelor’s degree will be considered to
                  enter through a ‘Mature Entry Route’ subject to having a
                  minimum of five years of managerial/supervisory experience.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            fetchpriority="high"
            decoding="async"
            width="310"
            height="330"
            src="https://ad.airtics.org/wp-content/uploads/2023/11/airtics-5.png"
            alt=""
          />
        </div>
        <div className="bg-[#ea9e25] h-[271px] rounded-tr-[40px] w-[78px] mt-4 hidden sm:block" />
      </div>
      {/* No bachler */}
      <div className="max-w-[1200px] m-auto">
        <h2 className="font-normal tmd:text-4xl text-2xl my-5">
          NO BACHELOR'S
          <b>
            {" "}
            NEEDED FOR PROFESSIONALS
            <br />
            WITH 5 YEARS OF EXPERIENCE
          </b>
        </h2>
        <hr />
        <br />
        <h2 className="md:text-4xl text-2xl font-bold text-[#ea9e25]" id="tools">
          LEARN IN-DEMAND
          <br />
          TOOLS & LANGUAGES
        </h2>
        <div className="flex gap-4 flex-wrap sm:justify-normal justify-center">
          <div className="my-5 max-w-[176px]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="176"
                // height="719"
                src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-set-1.png"
                className="attachment-full size-full wp-image-31110"
                alt=""
              />
            </div>
          </div>
          <div className="my-5 max-w-[176px]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="176"
                src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-set-2.png"
                className="attachment-full size-full wp-image-31111"
                alt=""
              />
            </div>
          </div>
          <div className="my-5 max-w-[176px]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="176"
                src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-set-3.png"
                className="attachment-full size-full wp-image-31112"
                alt=""
              />
            </div>
          </div>
          <div className="my-5 max-w-[176px]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="176"
                src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-set-4.png"
                className="attachment-full size-full wp-image-31113"
                alt=""
              />
            </div>
          </div>
          <div className="my-5 max-w-[176px]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="176"
                height="522"
                src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-set-5.png"
                className="attachment-full size-full wp-image-31114"
                alt=""
              />
            </div>
          </div>
          <div className="my-5 max-w-[176px]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="476"
                height="521"
                src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-set-6.png"
                className="attachment-full size-full wp-image-31115"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Eligibility;