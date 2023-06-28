import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="bg-[#42180F] py-10">
      <div className="container mx-auto flex justify-between items-center lg:flex-row flex-col xl:gap-8 gap-5 ">
        <div className="md:w-1/2  flex justify-start md:items-start flex-col items-center lg:ml-5">
          <img src="/images/logo.png" alt="logo" />
          <div className="text-lg odor-mean-chey-fon flex gap-8 ">
            <a href="">Privacy Policy</a>
            <a href=""> Cookies </a>
            <a href="">Terms of Service</a>
          </div>
          <p className="odor-mean-chey-font md:text-start text-center text-[14px] opacity-[0.5] mt-5">
            @2023 Sensei Rights Reserved.
          </p>
        </div>
        <div className="text-center md:mx-0 mx-5 ">
          <p className="odor-mean-chey-font text-[14px] opacity-[0.5]">
            ptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go down as well as up. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
          </p>
        </div>
        <div className="flex lg:justify-end justify-center lg:items-end items-center flex-col md:mx-0 mx-5 lg:mr-5">
          <SocialLinks />
          <p className="lg:text-right text-center odor-mean-chey-font text-[14px] opacity-[0.5] mt-5">
            ptocurrency unregulated in your of cryptocurrencies es applicable in
            your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
