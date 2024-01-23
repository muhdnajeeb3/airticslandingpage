import React from "react";

function NavBar() {
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
          <span className="text-base">About Woolf</span>
          <div className="w-px bg-[#fcaf17]" />
        </div>
        <div className="flex gap-4">
          <span className="text-base">Curriculum</span>
          <div className="w-px bg-[#fcaf17]" />
        </div>
        <div className="flex gap-4">
          <span className="text-base">Tools</span>
          <div className="w-px bg-[#fcaf17]" />
        </div>
        <div className="flex gap-4">
          <span className="text-base">Faculty</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
