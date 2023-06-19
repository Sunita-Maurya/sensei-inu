import React from "react";

const Navbar = () => {
  return (
    <div className="odor-mean-chey-font flex justify-between items-center ">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex justify-center gap-10 text-lg">
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
  );
};

export default Navbar;
