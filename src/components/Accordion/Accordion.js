"use client";
import React, { useState } from "react";
import "./Accordion.css";

const faqData = [
  {
    id: 1,
    ques: "What is Sensei INU ?",
    ans: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor",
  },
  {
    id: 2,
    ques: "Why Lorem ipusm is important in",
    ans: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor",
  },
  {
    id: 3,
    ques: "Why Lorem ipusm is",
    ans: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor",
  },
  {
    id: 4,
    ques: "Why Lorem ipusm is important in sensei",
    ans: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor",
  },
  {
    id: 5,
    ques: "Why Lorem ipusm is important in",
    ans: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor",
  },
];

const Accordion = () => {
  const [activeAccord, setActiveAccord] = useState(null);

  const handleclick = (value) => {
    console.log(value);
    if (value == activeAccord) {
      setActiveAccord(null);
    } else {
      setActiveAccord(value);
    }
  };
  return (
    <div className="accord-main-bg mb-56">
      <div className="flex justify-center items-center gap-20 container mx-auto ">
        <img src="/images/ques-inu.png" alt="ques-inu" />
        <div className="accord-bg p-20 ">
          <h1 className="text-[90px] nuku-nuku-font leading-none text-center mb-10">
            Frequently Asked
          </h1>
          {faqData.map((items, i) => {
            return (
              <>
                <div
                  key={i}
                  className="ques flex justify-between items-center"
                  onClick={() => handleclick(items.id)}
                >
                  <p>{items.ques}</p>
                  <img
                    src="/icons/arrow.png"
                    alt="arrow"
                    className={`${
                      activeAccord == items.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`wrapper ${
                    activeAccord == items.id ? "wrapper open py-4" : ""
                  }`}
                >
                  <div className={`expandable `}>
                    Cipher Core is an innovative blockchain project focused on
                    enabling anonymous transactions and preserving privacy
                    within decentralized finance.
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
