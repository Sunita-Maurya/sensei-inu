"use client";
import React, { useState } from "react";
import "./HowToBuy.css";
const roadmapData = [
  {
    id: 1,
    title:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et",
  },
  {
    id: 2,
    title:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et",
  },
  {
    id: 3,
    title:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et",
  },
  {
    id: 4,
    title:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et",
  },
  {
    id: 5,
    title:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et",
  },
];

const HowToBuy = () => {
  const [num, setNum] = useState(3);
  const [activeCard, setActiveCard] = useState(false);
  const backSlide = () => {
    if (num == 1) {
      setNum(roadmapData.length);
    } else {
      setNum(num - 1);
      setActiveCard(null);
    }
  };
  const nextSlide = () => {
    if (num == roadmapData.length) {
      setNum(1);
    } else {
      setNum(num + 1);
      setActiveCard(null);
    }
  };
  const clickHandler = (value) => {
    if (value == activeCard) {
      setActiveCard(null);
    } else {
      setActiveCard(value);
      setNum(value);
    }
  };
  return (
    <div className="how-to-buy-bg pb-8">
      <div id="howToBuy" className="container mx-auto py-10 text-center px-5">
        <h1 className="md:text-[90px] text-4xl  nuku-nuku-font  leading-none">
          How To Buy
        </h1>
        <div className="flex justify-center md:flex-row flex-col   xl:gap-20 gap-5 py-10 text-[#77351D]">
          <div className="use-bg xl:p-10 p-4 mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="nuku-nuku-font xl:text-[50px] text-2xl  leading-none w-1/2">
                USE ETH OR BNB
              </h2>
              <img
                src="/icons/use-eth.png"
                alt="use-eth"
                className="lg:w-auto w-16"
              />
            </div>
            <p className="text-lg text-start odor-mean-chey-font mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
          </div>
          <div className="use-bg xl:p-10 p-4 mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="nuku-nuku-font xl:text-[50px] text-2xl  leading-none w-1/2">
                USE ETH OR BNB
              </h2>
              <img
                src="/icons/use-eth.png"
                alt="use-eth"
                className=" lg:w-auto w-16"
              />
            </div>
            <p className="text-lg text-start odor-mean-chey-font mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
          </div>
          <div className="use-bg xl:p-10 p-4  mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="nuku-nuku-font xl:text-[50px] text-2xl leading-none w-1/2">
                USE ETH OR BNB
              </h2>
              <img
                src="/icons/use-eth.png"
                alt="use-eth"
                className="lg:w-auto w-16"
              />
            </div>
            <p className="text-lg text-start odor-mean-chey-font mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
          </div>
        </div>
      </div>
      {/* --------roadmap---------- */}
      <div id="roadmap" className=" max-w-[1850px] mx-auto">
        <h1 className="md:text-[90px] text-4xl nuku-nuku-font  leading-none text-center mb-8">
          Roadmap{" "}
        </h1>
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mx-5">
          {roadmapData.map((items, i) => (
            <div className=" " key={i}>
              <div className=" flex justify-center items-center flex-wrap gap-4">
                <span
                  className={`${
                    num == items.id ? "bg-[#EF8D30] " : "bg-white"
                  }  block h-5 w-5  rounded-full`}
                ></span>
                <h2
                  className={`${
                    num == items.id ? "text-[#EF8D30] " : "text-white"
                  }  nuku-nuku-font text-3xl text-center py-3`}
                >
                  Q{i + 1} 2023
                </h2>
              </div>
              <div
                onClick={() => clickHandler(items.id)}
                className={` ${
                  num == items.id || activeCard == items.id
                    ? "roadmap-card-bg-active "
                    : "roadmap-card-bg"
                } p-8 `}
              >
                <p
                  className={`${
                    num == items.id ? "opacity-[1]" : "opacity-[.4]"
                  } odor-mean-chey-font text-lg `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex hidden items-center justify-center my-10 gap-5">
          <button onClick={backSlide}>
            <img src="/images/back-btn.png" alt="left" />
          </button>
          <button onClick={nextSlide}>
            <img src="/images/next-btn.png" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
