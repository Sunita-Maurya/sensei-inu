import React from "react";
import "./TokenAirdrop.css";
const TokenAirdrop = () => {
  return (
    <div id="airdrop" className="airdrop-bg py-20">
      <div className="container lg:mx-auto ">
        <h1 className="md:text-[80px] text-3xl nuku-nuku-font text-center leading-normal">
          <span className="text-[#AD190E]">50 billion </span> TOKEN AIRDROP
        </h1>
        <p className="text-lg odor-mean-chey-font py-5 text-center  mx-aut">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et
        </p>
        <div className="flex justify-center md:flex-row flex-col  xl:gap-20 gap-5 mt-20 mx-5">
          <div className="airdrop-cards lg:p-10 px-4 py-10">
            <h2 className="text-[#EDA135] lg:text-[50px] text-5xl  nuku-nuku-font text-center">
              Buy in pre sale
            </h2>
            <p className="text-lg odor-mean-chey-font py-5 text-center">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor
            </p>
          </div>
          <div className="airdrop-cards lg:p-10 px-4 py-10">
            <h2 className="text-[#EDA135] lg:text-[50px] text-5xl  nuku-nuku-font text-center">
              Buy in pre sale
            </h2>
            <p className="text-lg odor-mean-chey-font py-5 text-center">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor
            </p>
          </div>
          <div className="airdrop-cards lg:p-10 px-4 py-10">
            <h2 className="text-[#EDA135] lg:text-[50px] text-5xl  nuku-nuku-font text-center">
              Buy in pre sale
            </h2>
            <p className="text-lg odor-mean-chey-font py-5 text-center">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center md:flex-row flex-col-reverse md:py-0 py-10">
        <img
          src="/images/airdrop-inu.png"
          alt="inu"
          className="md:-translate-y-14"
        />
        <button className="glob-btn ">Buy Now</button>
      </div>
    </div>
  );
};

export default TokenAirdrop;
