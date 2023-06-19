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
  const [activeCard, setActiveCard] = useState(false);
  const backSlide = () => {
    setActiveCard(true);
  };
  return (
    <div className="how-to-buy-bg pb-8">
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-[90px]  nuku-nuku-font  leading-none">
          How To Buy
        </h1>
        <div className="flex justify-center gap-20 py-10 text-[#77351D]">
          <div className="use-bg p-10">
            <div className="flex items-center justify-between">
              <h2 className="nuku-nuku-font text-[50px]  leading-none w-1/2">
                USE ETH OR BNB
              </h2>
              <img src="/icons/use-eth.png" alt="use-eth" />
            </div>
            <p className="text-lg text-start odor-mean-chey-font mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
          </div>
          <div className="use-bg p-10">
            <div className="flex items-center justify-between">
              <h2 className="nuku-nuku-font text-[50px]  leading-none w-1/2">
                USE ETH OR BNB
              </h2>
              <img src="/icons/use-eth.png" alt="use-eth" />
            </div>
            <p className="text-lg text-start odor-mean-chey-font mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et
            </p>
          </div>
          <div className="use-bg p-10">
            <div className="flex items-center justify-between">
              <h2 className="nuku-nuku-font text-[50px]  leading-none w-1/2">
                USE ETH OR BNB
              </h2>
              <img src="/icons/use-eth.png" alt="use-eth" />
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
      <h1 className="text-[90px]  nuku-nuku-font  leading-none text-center mb-8">
        Roadmap{" "}
      </h1>
      <div className="flex justify-center items-center gap-5 ">
        {roadmapData.map((items, i) => (
          <div className="">
            <h2 className="nuku-nuku-font text-3xl text-center py-3">
              Q1 2023
            </h2>
            <div
              className={`${
                activeCard ? "roadmap-card-bg-active" : "roadmap-card-bg"
              } p-8`}
            >
              <p className="odor-mean-chey-font text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-10 gap-5">
        <button onClick={backSlide}>
          <img src="/images/back-btn.png" alt="left" />
        </button>
        <button>
          <img src="/images/next-btn.png" alt="left" />
        </button>
      </div>
    </div>
  );
};

export default HowToBuy;
