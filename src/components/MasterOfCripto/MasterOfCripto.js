import React from "react";
import "./MasterOfCripto.css";
const MasterOfCripto = () => {
  return (
    <>
      <div className="master-bg">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-[100px] text-[#F0C8B4]  nuku-nuku-font leading-none">
            Master of
          </h1>
          <h1 className="text-[100px]  nuku-nuku-font">CRYPTO Trivia</h1>
          <div className="max-w-[50%] text-lg odor-mean-chey-font py-5 mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
            <h2 className="text-[40px] py-8">Learn the Entire Crypto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et sed do eiusmod tempor incididunt ut labore et sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad enim Lorem ipsum dolor sit amet, consectetur adipiscin
              dolore magna aliqua. Ut enim ad enim Lorem ipsum dolor sit amet,
              consectetur adipiscing
            </p>
          </div>
        </div>
      </div>

      {/* --------how to our tool */}
      <div className="how-tool-bg">
        <div className="container mx-auto flex flex-col justify-center items-center py-10">
          <h1 className="text-[90px]  nuku-nuku-font">Know our tool</h1>
          <img src="/images/how-tool-inu.png" alt="inu" />
        </div>
      </div>
      {/* ------------SENSEI is One Click away */}
      <div className="sensei-is-bg">
        <div className="container mx-auto flex items-center justify-center pt-32">
          <div>
            <h1 className="text-[100px]  nuku-nuku-font text-[#AD190E] leading-none">
              SENSEI is
            </h1>
            <h1 className="text-[90px]  nuku-nuku-font">One Click away</h1>
            <p className="text-lg py-5 odor-mean-chey-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
            <p className="text-lg odor-mean-chey-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et Lorem ipsum dolor sit amet,
            </p>
            <button className="glob-btn mt-10">Whitepaper</button>
          </div>
          {/* <div className="flex items-end  "> */}
          <img
            src="/images/character with Book copy.png"
            alt="character"
            className=""
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default MasterOfCripto;
