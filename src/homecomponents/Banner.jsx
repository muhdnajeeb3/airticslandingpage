import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import PopupForm from "./PopupForm";

function Banner() {
  return (
    <Container
      fluid
      className="min-h-[760px] bg-banner bg-no-repeat m-auto bg-cover bg-center"
    >
      <NavBar />
      <PopupForm />
      <div className="max-w-[1200px] mx-auto text-base mt-32 flex flex-col">
        <span className="text-3xl text-white font-medium mb-8">MASTER OF</span>
        <span className=" text-5xl md:text-8xl font-semibold text-white">DATA</span>
        <span className="text-5xl md:text-8xl font-bold text-[#FCAF17]">SCIENCE</span>
        <div className="flex gap-2 mt-5 pb-2">
        <div className="w-[156px] h-[39px] bg-white flex items-center justify-center font-semibold text-xl">14 MONTHS</div>
        <div className="w-2 bg-[#fcaf17]" />
        </div>
        <span className="text-[#fcaf17] mt-1">DURATION</span>
      </div>
    </Container>
  );
}

export default Banner;
