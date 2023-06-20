import React from "react";
import "./TokenAirdrop.css";
const TokenAirdrop = () => {
  return (
    <div className="airdrop-bg py-20">
      <div className="container mx-auto">
        <h1 className="text-[80px]  nuku-nuku-font text-center">
          <span className="text-[#AD190E]">50 billion </span> TOKEN AIRDROP
        </h1>
        <p className="text-lg odor-mean-chey-font py-5 text-center max-w-[50%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et
        </p>
        <div className="flex justify-center gap-20 mt-20">
          <div className="airdrop-cards p-10">
            <h2 className="text-[#EDA135] text-[50px]  nuku-nuku-font text-center">
              Buy in pre sale
            </h2>
            <p className="text-lg odor-mean-chey-font py-5 text-center">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor
            </p>
          </div>
          <div className="airdrop-cards p-10">
            <h2 className="text-[#EDA135] text-[50px]  nuku-nuku-font text-center">
              Buy in pre sale
            </h2>
            <p className="text-lg odor-mean-chey-font py-5 text-center">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor
            </p>
          </div>
          <div className="airdrop-cards p-10">
            <h2 className="text-[#EDA135] text-[50px]  nuku-nuku-font text-center">
              Buy in pre sale
            </h2>
            <p className="text-lg odor-mean-chey-font py-5 text-center">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="/images/airdrop-inu.png"
          alt="inu"
          className="-translate-y-14"
        />
        <button className="glob-btn ">Buy Now</button>
      </div>
    </div>
  );
};

export default TokenAirdrop;
