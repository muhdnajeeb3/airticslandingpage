import React from "react";

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
    <div className="max-w-[1200px] m-auto py-3 flex justify-between lg:flex-row  flex-col">
      <div className="flex gap-3 items-center flex-wrap">
        <img
          src="https://ad.airtics.org/wp-content/uploads/2023/11/logo-white-only.svg"
          alt=""
          width="170"
          height="39"
        />
        <img
          decoding="async"
          width="170"
          height="25"
          src="https://ad.airtics.org/wp-content/uploads/2023/11/woolf-logo.png"
          alt="woolf"
          className="mt-2 max-h-6"
        />
      </div>
      <div className="flex gap-4 text-white p-4 flex-wrap">
        <div className="flex gap-4">
          <span className="text-base cursor-pointer" onClick={handleAboutWoolfScroll}>About Woolf</span>
          <div className="w-px bg-[#fcaf17]" />
        </div>
        <div className="flex gap-4">
          <span className="text-base cursor-pointer" onClick={handleCurriculumScroll}>Curriculum</span>
          <div className="w-px bg-[#fcaf17]" />
        </div>
        <div className="flex gap-4">
          <span className="text-base cursor-pointer" onClick={handleToolsScroll}>Tools</span>
          <div className="w-px bg-[#fcaf17]" />
        </div>
        <div className="flex gap-4">
          <span className="text-base cursor-pointer" onClick={handleFacultyScroll}>Faculty</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
