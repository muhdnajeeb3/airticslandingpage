import React from "react";
import { Container, Row } from "react-bootstrap";

function Embrace() {
  return (
    <Container fluid className="bg-white min-h-[290px]">
      <Row className="flex flex-col max-w-[1200px] mx-auto py-8 mb-10 mt-10">
        <span className="text-[#ea9e25] font-bold md:text-4xl text-2xl mb-4">
          READY TO EMBRACE
          <br />
          THE FUTURE OF DATA?
        </span>
        <span className="text-lg font-normal">
        Introducing the Master of Data Science program – your gateway to expertise in the realms of Data Analytics, Business, Artificial Intelligence, Natural Language Processing, and Computer Vision.
<br />
<br />
The 14-month postgraduate program is meticulously designed to empower you with the knowledge and skills needed to thrive in the ever-evolving field of Data Science
        </span>
      </Row>
    </Container>
  );
}

export default Embrace;
