"use client";
import React, { useState } from "react";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <div className="odor-mean-chey-font lg:flex hidden justify-between items-center xl:mx-0 mx-5 ">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="flex justify-center  gap-10 xl:text-lg text-sm">
          <a href="" className="">
            Platform
          </a>
          <a href="">Sensei Token</a>
          <a href="">How to Buy</a>
          <a href="">Roadmap</a>
          <a href="">Airdrop</a>
          <a href="">FAQs</a>
        </div>

        <select
          data-placeholder="Choose a Language..."
          className="bg-transparent  px-5 text-black rounded-3xl  border-2 "
        >
          <option value="EN" className="">
            English
          </option>
          <option value="ET">Estonian</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finnish</option>
          <option value="FR">French</option>
          <option value="KA">Georgian</option>
          <option value="DE">German</option>
          <option value="EL">Greek</option>
        </select>
      </div>
      {/* ------------- mobile viwe------------ */}
      <div className="lg:hidden p-5 relative ">
        <div className="flex justify-between items-center">
          <div>
            <img src="/images/logo.png" alt="logo" />
          </div>

          <div onClick={() => setActiveMenu(!activeMenu)}>
            <img
              src="/images/menu-bar.png"
              alt="menu"
              className="cursor-pointer "
            />
          </div>
        </div>
        {activeMenu && (
          <div className="bg-[#FE3736] odor-mean-chey-font absolute right-10 z-10  text-lg flex flex-col justify-center items-center rounded-2xl p-10">
            <div className="flex flex-col text-center justify-center  gap-5 ">
              <a href="" className="">
                Platform
              </a>
              <a href="">Sensei Token</a>
              <a href="">How to Buy</a>
              <a href="">Roadmap</a>
              <a href="">Airdrop</a>
              <a href="">FAQs</a>
            </div>
            <select
              data-placeholder="Choose a Language..."
              className="bg-transparent  mt-3 px-5 text-black rounded-3xl  border-2 "
            >
              <option value="EN" className="">
                English
              </option>
              <option value="ET">Estonian</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finnish</option>
              <option value="FR">French</option>
              <option value="KA">Georgian</option>
              <option value="DE">German</option>
              <option value="EL">Greek</option>
            </select>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
