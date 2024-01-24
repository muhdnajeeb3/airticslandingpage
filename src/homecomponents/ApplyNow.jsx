import React from "react";
import { Button, Container } from "react-bootstrap";

function ApplyNow() {
  const handleAboutWoolfScroll = () => {
    const AboutWoolf = document.getElementById("aboutwoolf");
    if (AboutWoolf) {
      AboutWoolf.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container fluid className="bg-[#ea9e25] min-h-[200px]">
      <div className="max-w-[1200px] mx-auto py-[3rem] flex md:flex-row flex-col justify-between">
       <div className="flex flex-col md:w-[55%]">
       <span className="font-bold sm:text-[40px] text-[24px] text-white">
          DO YOU WANT TO BE PART
          <br />
          OF THIS EXCITING FIELD?
        </span>
        <span className="text-base text-white my-[20px]">
        Get in touch with our team today to learn more about the Master of Data Science program from Woolf University, Malta.
        </span>
        <span className="text-base text-white mb-4">
        Why wait? Begin your data science journey with us!
        </span>
       </div>
       <div className="flex items-center">
        <Button variant="" className="w-[188px] h-[48px] bg-white"><span className="text-[24px] font-extrabold text-[#ea9e25]" onClick={handleAboutWoolfScroll}>Apply Now</span></Button>
       </div>
      </div>
    </Container>
  );
}

export default ApplyNow;
