import React from "react";
import { Button } from "react-bootstrap";

function NavBar() {
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
    <div className="max-w-[1200px] m-auto py-3 flex justify-between flex-row  flex-wrap items-center">
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
          <span className="text-base cursor-pointer" onClick={handleAboutWoolfScroll}>Why This Program</span>
        </div>
        <div className="flex gap-4">
          <span className="text-base cursor-pointer" onClick={handleCurriculumScroll}>Curriculum</span>
        </div>
        <div className="flex gap-4">
          <span className="text-base cursor-pointer" onClick={handleToolsScroll}>Course Delivery</span>
        </div>
        <div className="flex gap-4">
          <span className="text-base cursor-pointer" onClick={handleFacultyScroll}>Exit Pathways</span>
        </div>
      </div>
      <div className="flex gap-4 text-white p-4 flex-wrap">
        <button className="bg-white text-[#0C1051] rounded-[50px] font-bold font-[Raleway] w-[127px] h-[48px]" variant="">Enroll Now</button>
      </div>
    </div>
  );
}

export default NavBar;
