"use client";
import React from "react";
import "./MasterOfCripto.css";
const MasterOfCripto = () => {
  return (
    <>
      <div className="master-bg">
        <div className="container mx-auto text-center py-20 px-5">
          <h1 className="md:text-[100px] text-4xl text-[#F0C8B4]  nuku-nuku-font leading-normal">
            Master of
          </h1>

          <h1 className="md:text-[100px] text-4xl nuku-nuku-font">
            CRYPTO Trivia
          </h1>
          <div className="lg:max-w-[50%] text-lg odor-mean-chey-font py-10 mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
            <h2 className="md:text-[40px] text-2xl py-8">
              Learn the Entire Crypto
            </h2>
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
          <h1 className="md:text-[90px] text-4xl  nuku-nuku-font lg:mt-14">
            Know our tool
          </h1>
          <img src="/images/how-tool-inu.png" alt="inu" />
        </div>
      </div>
      {/* ------------SENSEI is One Click away */}
      <div className="sensei-is-bg">
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-center pt-32 ">
          <div>
            <h1 className="md:text-[100px] text-4xl lg:text-start text-center nuku-nuku-font text-[#AD190E] leading-normal">
              SENSEI is
            </h1>
            <h1 className="md:text-[90px] text-4xl  lg:text-start text-center nuku-nuku-font">
              One Click away
            </h1>
            <p className="text-lg py-5 odor-mean-chey-font  lg:text-start text-center md:px-0 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
            <p className="text-lg odor-mean-chey-font  lg:text-start text-center  md:px-0 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et Lorem ipsum dolor sit amet,
            </p>
            <div className="flex lg:justify-start justify-center items-center my-5">
              <button className="glob-btn mt-10">Whitepaper</button>
            </div>
          </div>
          <img
            src="/images/character with Book copy.png"
            alt="character"
            className="md:block hidden xl:w-auto lg:w-[40%]"
          />
          <img
            src="/images/book-inu-home.png"
            alt="character"
            className="md:hidden w-full pb-5"
          />
        </div>
      </div>
    </>
  );
};
export default MasterOfCripto;
