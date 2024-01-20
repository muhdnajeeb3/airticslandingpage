import React from "react";
import { Container, Row } from "react-bootstrap";

function ProgramCurriculum() {
  return (
    <Container fluid className="bg-[#fff4e3]">
      <div className="max-w-[1200px] m-auto pt-[4rem] pb-6">
        <span className="text-[#ea9e25] font-bold md:text-4xl text-2xl my-3 flex flex-col">
          PROGRAM CURRICULUM
        </span>
        <span className="text-lg tex-[#7A7A7A]">
          Tier 1 consists of 3 core modules with a total of 18 ECTS.
        </span>
        <br />
        <div className="mt-7 mb-[4rem]">
          <table className="w-full border-spacing-2 border-separate">
            <tr>
              <th className="text-[#ea9e25] text-lg md:text-4xl">TIER 1</th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">
                FUNDAMENTAL MODULES
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">ECTS</th>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Exploratory Data Analysis & Management
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Statistical Inference
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Fundamentals of Programming
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
          </table>
        </div>
        <Row className="bg-black p-10 my-4">
          <span className="text-white text-xl text-center">
            In Tier 2, students can choose from four specialization pathways:
            Data Analytics in Business, Artificial Intelligence, Natural
            Language Processing, and Computer Vision. Each specialization
            pathway consists of seven modules, including 2 mandatory modules and
            5 specialization modules.
          </span>
        </Row>
        <div className="mt-7 mb-[4rem]">
          <table className="w-full border-spacing-2 border-separate">
            <tr>
              <th className="text-[#ea9e25] text-lg md:text-4xl">TIER 2</th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">
                MANDATORY MODULES
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">ECTS</th>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Database Management Systems
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Data Visualisation
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
          </table>
        </div>
        <div className="mt-7 mb-[4rem]">
          <table className="w-full border-spacing-2 border-separate">
            <tr>
              <th className="text-[#ea9e25] text-lg md:text-4xl flex flex-col relative">
                TIER 2
                <span className="text-[#ea9e25] text-lg absolute bottom-[-20px]">
                  30 ECTS
                </span>
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">
                SPECIALIZATION MODULES
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">ECTS</th>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Topics in Data Mining
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td className="max-w-[100px] text-base md:absolute">
                Supplemental <br /> Certificate in <br /> Data Analytics <br />
                in Business
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Data Analytics in Business Process
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Data Science Case Analysis
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Big Data and Its Applications
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Privacy and Ethics in Data Science
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
          </table>
        </div>
        <div className="mt-7 mb-[4rem]">
          <table className="w-full border-spacing-2 border-separate">
            <tr>
              <th className="text-[#ea9e25] text-lg md:text-4xl flex flex-col relative">
                TIER 2
                <span className="text-[#ea9e25] text-lg absolute bottom-[-20px]">
                  30 ECTS
                </span>
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">
                SPECIALIZATION MODULES
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">ECTS</th>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Topics in Data Mining
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td className="max-w-[100px] text-base md:absolute">
                Supplemental
                <br /> Certificate in <br /> Artificial <br /> Intelligence
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Data Analytics in Business Process
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Deep Learning
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Big Data and Its Applications
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Privacy and Ethics in Data Science
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
          </table>
        </div>
        <div className="mt-7 mb-[4rem]">
          <table className="w-full border-spacing-2 border-separate">
            <tr>
              <th className="text-[#ea9e25] text-lg md:text-4xl flex flex-col relative">
                TIER 2
                <span className="text-[#ea9e25] text-lg absolute bottom-[-20px]">
                  30 ECTS
                </span>
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">
                SPECIALIZATION MODULES
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">ECTS</th>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Topics in Data Mining
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td className="max-w-[100px] text-base md:absolute">
                Supplemental <br /> Certificate in <br /> Natural <br />{" "}
                Language <br /> Processing
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Machine Learning Algorithms
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Text Mining and Natural Language Processing
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Big Data and Its Applications
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Privacy and Ethics in Data Science
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
          </table>
        </div>
        <div className="mt-7 mb-[4rem]">
          <table className="w-full border-spacing-2 border-separate">
            <tr>
              <th className="text-[#ea9e25] text-lg md:text-4xl flex flex-col relative">
                TIER 2
                <span className="text-[#ea9e25] text-lg absolute bottom-[-20px]">
                  30 ECTS
                </span>
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">
                SPECIALIZATION MODULES
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">ECTS</th>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Topics in Data Mining
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td className="max-w-[100px] text-base md:absolute">
                Supplemental <br /> Certificate in <br /> Data Analytics in{" "}
                <br /> Business
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Data Analytics in Business Process
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Data Science Case Analysis
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Big Data and Its Applications
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                6
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-3 text-lg">
                Privacy and Ethics in Data Science
              </td>
              <td className="border-b-[1px] border-solid border-black py-3 text-lg">
                6
              </td>
            </tr>
          </table>
        </div>
        <Row className="bg-black p-10 my-4">
          <span className="text-white text-xl text-center">
            In Tier 3, the students require to investigate a real-world problem
            in the last phase of the course. It aims to help students
            appropriately apply the concepts, techniques, and tools to a
            real-world scenario.
          </span>
        </Row>
        <div className="mt-7 mb-[4rem]">
          <table className="w-full border-spacing-2 border-separate">
            <tr>
              <th className="text-[#ea9e25] text-lg md:text-4xl">TIER 1</th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">
                MANDATORY MODULES
              </th>
              <th className="text-[#ea9e25] text-lg md:text-4xl">ECTS</th>
            </tr>
            <tr>
              <td></td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                Capstone Project
              </td>
              <td className="border-b-[1px] border-solid border-black py-1 text-lg">
                30
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default ProgramCurriculum;