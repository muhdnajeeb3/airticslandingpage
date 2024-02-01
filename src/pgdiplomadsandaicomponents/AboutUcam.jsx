import React from "react";
import { Container } from "react-bootstrap";

function AboutUcam() {
  return (
    <Container fluid className="bg-[#0C1051]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div>
          <img
            src="https://ad.airtics.org/wp-content/uploads/2023/11/abt-ucam-img-min.png"
            alt=""
          />
        </div>
        <div className="border-[#40c3d5] min-h-[200px] border-1 border-t-0 p-4">
          <div className="flex md:flex-row flex-col md:gap-0 gap-5">
            <div className="md:border-r md:border-[#40c3d5]  min-h-[150px] w-33.33% pr-4 flex-col items-center gap-4 flex justify-center">
              <span className="text-[#40C3D5] text-3xl lg:text-7xl font-[900] text-center">
                ABOUT
                <br />
                UCAM
              </span>
              <img
                src="https://ad.airtics.org/wp-content/uploads/2023/11/qs-star.png"
                alt=""
                className="max-w-[269px]"
              />
            </div>
            <div className="w-66.66% flex items-center pl-7">
              <p className="text-base text-white">
                Universidad Católica de Murcia (UCAM), founded in 1996, is a
                fully-accredited European University based out of Murcia, Spain.
                With learning centres in the Middle East and Southeast Asia,
                UCAM aims to provide students with the knowledge and skills to
                serve society. The university offers various courses, including
                30 official bachelor’s degrees, 30 master’s degrees and ten
                technical higher education qualifications through its Higher
                Vocational Training Institute, in addition to its in-house
                qualifications and language courses. UCAM is accredited by ANECA
                (National Agency for Quality Assessment and Accreditation of
                Spain) regarding 17 of its undergraduate degrees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUcam;
