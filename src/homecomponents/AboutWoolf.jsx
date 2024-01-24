import React from "react";
import { Container, Row } from "react-bootstrap";

function AboutWoolf() {
  return (
    <Container fluid className="bg-[#E7E7E7] min-h-[290px]" id="aboutwoolf">
      <Row className="flex flex-col max-w-[1200px] mx-auto py-8">
        <span className="text-[#ea9e25] font-bold md:text-4xl text-2xl mb-4">
          ABOUT WOOLF
        </span>
        <span className="text-lg font-normal">
          Woolf University, Malta, is revolutionizing the world of higher
          education by offering a new approach to collegiate universities. As
          the world’s first global collegiate higher education institution,
          Woolf enables qualified organizations to join as accredited member
          colleges. The mission is to increase access to world-class higher
          education and ensure it is globally recognized and transferable. Woolf
          promotes academic excellence and guards values that are humane,
          democratic and international. With ECTS credits that are globally
          recognized, students at Woolf can be confident that their degrees will
          have real value and be recognized by employers worldwide.
        </span>
      </Row>
    </Container>
  );
}

export default AboutWoolf;
