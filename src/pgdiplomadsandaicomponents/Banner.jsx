import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import PopupForm from "../homecomponents/PopupForm";

function Banner() {
  const switchimg =
    "data:img/png;base64,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";
  return (
    <Container fluid className="bg-[#0C1051] pb-5">
      <NavBar />
      {/* <PopupForm /> */}
      <div className="max-w-[1200px] m-auto flex pt-5 pb-3 lg:flex-row flex-col">
        <div className="flex flex-col gap-4">
          <span className="text-white font-extrabold text-5xl">
            PG Diploma in Data Science and Artificial Intelligence
          </span>
          <span className="text-white">
            A tailor-made program designed to meet the unique requirements of
            each learner. <br />
            <br />
            The 6-month online program provides comprehensive training in Data
            Science and Artificial Intelligence, enabling individuals from even
            non-IT backgrounds to develop their expertise.
          </span>
          <span className="text-white text-base">
            This qualification seeks to offer learners the following:
          </span>
          <ul className="text-white list-none p-0">
            <li className="flex gap-2 items-center pb-2">
              <img width="24" height="12" alt="" src={switchimg} />

              <span>Up-to-date expertise in Data Science & AI</span>
            </li>
            <li className="flex gap-2 items-center pb-2">
              <img width="24" height="12" alt="" src={switchimg} />
              <span>
                Proficiency in real-world applications of Data Science & AI
                tools
              </span>
            </li>
            <li className="flex gap-2 items-center pb-2">
              <img width="24" height="12" alt="" src={switchimg} />{" "}
              <span>Hands-on experience in industry-specific data sets</span>
            </li>
            <li className="flex gap-2 items-center">
              <img width="24" height="12" alt="" src={switchimg} />{" "}
              <span>Preparing learners for AI industry roles</span>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <img
              src="https://ad.airtics.org/wp-content/uploads/2023/11/banner-image-min.png"
              alt=""
              className="md:max-w-[580px] h-[379px] max-w-full"
            />
          </div>
          <div className="flex gap-3 my-5 items-center flex-wrap">
            <div className="flex gap-3 items-center border-y-[1px] border-[#242F8E]">
              <div className="flex items-center gap-2 my-3">
                <img
                  width="55"
                  alt=""
                  height="82"
                  src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABSCAYAAAAo7uilAAAFY0lEQVR4nO2dT2wUVRzHfzTcMLQnONkFbiZt0xugLULwoFDUm3ZrokYNtBopF+kfEzCBbeFCNaGFCKEHusWb2la5EMHWgCe1S8IN2nrj1CVyLvmOb8jOzJvt7uzvvTdlf5+E0H27O3++7/3+vN+bndm0trZGZXhX/dtBRK+X++ALzh0i+puIJtX/WuLE3K++mKljAeOAsP06URs0Xxgjot9EyFhgoX8R0UfhD2wOvcZo/NDtsW4YrqkDnfQPuNTMMXQv1LtCCThARLepRMwdygc0brATSQPLSr/nPrNfhExMxvefvpgRZypUBdJHz8zbVXQSamNTg2/vQs20Q8x20ZGFJl3SLiRExGRExGRExGRExGRExGRExGQkXIJjpVh8SouFh6k52c6OVqPbNyomhHyra8jkLqriv9UZo9sXM2dExGRExGTEqM9sbt5OQwPd3t+50enAex2vtdC+Tv6AcH3qFq38+zjQ5h+DaVDPPE1Ep0zv6KWmI5ETHBrIsu/nzcODtPDH/UCb6cCjOCBmzogzMRcXzeSfKytBE29t2WlkPzqsibl165bA68XCI/Z9LK88jvjLxsYtsZ/nxpqY+zpaAq9x0jNz91j3cXH8p+h+DQS5OKyJ2dW1N9J2cuB7tu1jVF7P34q092TfYNvHelgT88jhPRFTx+j8iknQo70X6MmTp4E2pF+Z5m0s268Ea2LCd33R93akffzSz9oRVQ3okHA6BIYH+VOvcliN5sgrddH1WN8YzS8UEm0THYEOCdN1aLfxKlEY66nR5Yn+iLmD97Jnqw5IEBIdEab55W10eeIE1yFXjHUx21p30fnRzyLt8HfdPWcrNvmjvWNaIdFRN/LDVlMiHydJ+wfZg7HzZQhULiih4Px+9gxNTetFR0ehw1zgbAYE/9nTfVD7Hnzg3o4vvXSnFBSb0T77y5/a710a7/c6yhVO5+bwnxBAR+H+I0+4ixP/J+K50Ty92nk8MsMhZdrTU8NOhSSbVaNywE/CtMN5og/EKvfezbmcM9MuIR1VI4woCBJXlIgTEkn5g8LVNAjpkZoSHAS5u/Ad9R2LJvY6zo18SjfnRpxE7ThSVc9EgKk0eZ+ZvedF9jSRGjERaBBgEHgqAdPHV1o/STxzMkEqxEQCfnLwivY9BBhMDXXAl2Jd3o/4rnEqJswUazZxCTgCDPzojfzX9Otszpsm6kBHoENc40xMX0hdtYfUghsCjF9CQ9ECwsYl+ugQ14IaXeotB4TU+UeY9Q/5YW3FB5EbiX5b206tW/BHOD7jAicjEyNIJyTMGPnmeqWzz3vf8cxeV32CoLXWR5NiXUycqM5HImGHGVeagENwCK8TFMUSF1ffWRUTflJXEYKQSRJwCB8nqAv/aVVM3fwbQsDHJZ3JQFCdj4QbsW3u1sREOU1n3l5AqXFujcU63TQ0N5KvabvVYk3M2bm7kTbkkRCCAxSFw3moibX5clgTE3PpMNyrh0Oa7c3P25tuWhMznJxjFHGvHupGuc2o7mwGZGIZFkEMrsMVzsTMZOxcaRE3XTWBXJ/JiPGfrsQt2+Jy6d8NBAfdpYqoAwBMDExi/EdVcWaGtEW30mgCW6YuZs6IiMmIiMmIUZ+JXNLSz0ZSgYxMRkRMRkRMRkRMRkRMRkRMRkRMRkRMRhr8++UKNbMEMZdEx5oploq5vMFPxjU/UonPPF23MvDg3au99D7tS/LUgETcUY+vCIgpN3KunqK6Z/MqhVIj3PT+4w1yEmmgqEbkqn8s4TxzUj1eoFh30lTHP0rIwJNXdEn7bTV0vxVRI0CPb5RLjDzCZr2HKzWpHmj3nWwdAjOGcBhk8RMcInoGqbzVxsKL/QYAAAAASUVORK5CYII="
                />
                <span className="text-[28px] font-[roboto] text-white">
                  6 Months
                </span>
              </div>
              <div className="flex items-center gap-2 my-3">
                <img
                  width="55"
                  alt=""
                  height="55"
                  src="data:img/png;base64,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"
                />

                <span className="text-[28px] font-[roboto] text-white">
                  45 ECTS
                </span>
              </div>
            </div>
            <div>
              <img
                src="https://ad.airtics.org/wp-content/uploads/2023/11/landing-pg-diploma-ucam.png"
                alt=""
                width="142"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto flex py-6 flex-row gap-[37px] flex-wrap justify-center">
        <div className="flex flex-col w-[169px] gap-3">
          <div className="bg-[#131B56] p-7 rounded-2xl items-center flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              width="71"
              height="56"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/icon-1.png"
              alt=""
            />
          </div>
          <div className="flex">
            <span className="text-white text-center">
              No programming experience required
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[169px] gap-3">
          <div className="bg-[#131B56] p-7 rounded-2xl items-center flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              width="65"
              height="65"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/icon-2.png"
              alt=""
            />
          </div>
          <div className="flex">
            <span className="text-white text-center">
            European Qualification
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[169px] gap-3">
          <div className="bg-[#131B56] p-7 rounded-2xl items-center flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              width="65"
              height="65"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/icon-3.png"
              alt=""
            />
          </div>
          <div className="flex">
            <span className="text-white text-center">
            Industry-Specific data sets
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[169px] gap-3">
          <div className="bg-[#131B56] p-7 rounded-2xl items-center flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              width="72"
              height="62"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/icon-4.png"
              alt=""
            />
          </div>
          <div className="flex">
            <span className="text-white text-center">
            100% Online Learning
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[169px] gap-3">
          <div className="bg-[#131B56] p-7 rounded-2xl items-center flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              width="65"
              height="65"
              src="	https://ad.airtics.org/wp-content/uploads/2023/11/icon-5.png"
              alt=""
            />
          </div>
          <div className="flex">
            <span className="text-white text-center">
            Personal Tutor Support
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[169px] gap-3">
          <div className="bg-[#131B56] p-7 rounded-2xl items-center flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              width="65"
              height="65"
              src="https://ad.airtics.org/wp-content/uploads/2023/11/icon-6.png"
              alt=""
            />
          </div>
          <div className="flex">
            <span className="text-white text-center">
            Flexible Payment
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Banner;
