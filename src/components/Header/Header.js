import React from "react";
import SocialLinks from "../SocialLinks";

import "./Header.css";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className=" header-bg">
      <div className="container mx-auto">
        <Navbar />

        <div className=" made-tommy-font flex lg:flex-row flex-col items-center justify-between relative py-5">
          <div className="lg:block hidden">
            <img src="/images/header-inu.png" alt="hero" className=" " />
          </div>
          <button className="glob-btn absolute left-0 bottom-5 lg:block hidden">
            Whitepaper
          </button>
          <div className="buy-now-card py-6 mx-5">
            <div className="flex  justify-around">
              <div className="timer-box">17 D</div>
              <div className="timer-box">03 H</div>
              <div className="timer-box">26 M</div>
              <div className="timer-box">54m</div>
            </div>
            <h2 className="text-center text-2xl text-white font-medium my-3">
              Buy in Before price Increases
            </h2>
            <div className="bg-white rounded-[54px] p-5">
              <div className="flex justify-between items-center ">
                <button className="chain-btn border">
                  <img src="/icons/eth.png" alt="eth" />
                  <span>ETH</span>
                </button>
                <button className="chain-btn">
                  <img src="/icons/usdt.png" alt="eth" />
                  <span>USDT</span>
                </button>
                <button className="chain-btn">
                  <img src="/icons/bnb.png" alt="eth" />
                  <span>BNB</span>
                </button>
                <button className="chain-btn">
                  <img src="/icons/card.png" alt="eth" />
                  <span>Card</span>
                </button>
              </div>
              <div className="flex md:flex-row flex-col justify-between items-center gap-3 my-5 ">
                <div className="md:w-auto w-full">
                  <div className="flex justify-between my-1 font-semibold">
                    <p className="text-[#c1c1c1]">
                      Amount in <span className="text-[#717171]">ETH </span> you
                      pay
                    </p>
                    <button>Max</button>
                  </div>
                  <div className="input-box  flex justify-between p-1 ">
                    <input
                      type="number"
                      placeholder="0"
                      className="bg-transparent text-[#202020] font-medium placeholder:text-[#202020] w-[90%] pl-3"
                    />
                    <img src="/icons/white-eth.png" alt="white eth" />
                  </div>
                </div>
                <div className="md:w-auto w-full">
                  <div className="flex md:justify-center my-1 text-[#c1c1c1] font-semibold">
                    <p>
                      Amount in
                      <span className="text-[#717171]"> $SAI </span>your receive
                    </p>
                  </div>
                  <div className="input-box flex justify-between p-1">
                    <input
                      type="number"
                      placeholder="0"
                      className="bg-transparent text-[#202020] font-medium placeholder:text-[#202020] w-[90%] pl-3"
                    />
                    <img src="/icons/white-eth.png" alt="white eth" />
                  </div>
                </div>
              </div>
              <p className=" text-center text-[#c1c1c1] font-semibold text-lg mb-3">
                0.015 ETH is reserved for gas. The actual amount used will
                depend on the network.
              </p>
              <button className="buy-now-btn  text-white py-2 w-full">
                BUY NOW
              </button>
              <p className=" text-[#c1c1c1] text-center mt-3 font-semibold text-lg">
                LISTING PRICE: $0.0000336
              </p>
            </div>
            <SocialLinks />
          </div>
          <div className="lg:hidden  w-full">
            <img src="/images/mob-header-inu.png" alt="hero" className=" " />
            <button className="glob-btn absolute left-0 bottom-5 md:ml-56">
              Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
