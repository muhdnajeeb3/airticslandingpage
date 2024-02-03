import React from "react";
import { Container } from "react-bootstrap";

function WhyChoose() {
    const arrow = 'data:img/png;base64,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'
  return (
    <Container
      fluid
      className="bg-whychoosebg min-h-[500px] bg-center bg-no-repeat bg-cover"
      id="whythisprogram"
    >
      <div className="max-w-[1200px] m-auto flex">
        <div className="lg:w-[33.33%]"></div>
        <div className="lg:w-[66.66%] py-5">
          <span className="text-[#40C3D5] text-3xl lg:text-7xl font-[900]">
            WHY CHOOSE <br />
            THIS PROGRAM
          </span>
          <ul className="list-none p-0 text-white mt-5 mb-3">
            <li className="flex gap-4 ">
                <div>
                    <img src={arrow} alt="" className="min-w-6 h-7" height="30px"/>
                </div>
                <div>
                <span className="text-base font-bold">Join a $600 Billion Industry & Future-Proof Your Career</span>
                <p className="text-base">Data Science and AI offer future-proofed careers, with professionals being among the highest-paid in this century. The shortage of experts in these fields, coupled with their relatively new nature, opens doors to opportunities in diverse industries.</p>
                </div>
            </li>
            <li></li>
            <li></li>
          </ul>
          <ul className="list-none p-0 text-white my-3">
            <li className="flex gap-4 ">
                <div>
                    <img src={arrow} alt="" className="min-w-6 h-7" height="30px"/>
                </div>
                <div>
                <span className="text-base font-bold">Be The Right Talent, At The Right Time</span>
                <p className="text-base">Data Science and AI drive industry transformation by converting raw data into valuable insights, fostering business growth. Companies big and small are looking for AI and data science professionals to enhance customer understanding and business success.</p>
                </div>
            </li>
            <li></li>
            <li></li>
          </ul>
          <ul className="list-none p-0 text-white my-3">
            <li className="flex gap-4 ">
                <div>
                    <img src={arrow} alt="" className="min-w-6 h-7" height="30px"/>
                </div>
                <div>
                <span className="text-base font-bold">WES Approved European Qualification</span>
                <p className="text-base">Earn a European qualification from UCAM Spain which is accepted by the World Education Service (WES) ensuring its worldwide recognition and facilitating your potential migration to countries such as Canada.</p>
                </div>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default WhyChoose;
