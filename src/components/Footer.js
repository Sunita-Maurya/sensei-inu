import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#42180F] py-10">
      <div className="container mx-auto flex justify-between items-center gap-8 ">
        <div className="w-1/2">
          <img src="/images/logo.png" alt="logo" />
          <div className="text-lg odor-mean-chey-fon flex gap-8 ">
            <a href="">Privacy Policy</a>
            <a href=""> Cookies </a>
            <a href="">Terms of Service</a>
          </div>
          <p className="odor-mean-chey-font text-[14px] opacity-[0.5] mt-5">
            @2023 Sensei Rights Reserved.
          </p>
        </div>
        <div className="text-center">
          <p className="odor-mean-chey-font text-[14px] opacity-[0.5]">
            ptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go down as well as up. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
          </p>
        </div>
        <div className="flex justify-end items-end flex-col">
          <div className="flex gap-5">
            <img src="/icons/discord.png" alt="discord" />
            <img src="/icons/twitter.png" alt="twitter" />
            <img src="/icons/telegram.png" alt="telegram" />
          </div>
          <p className="text-right odor-mean-chey-font text-[14px] opacity-[0.5] mt-5">
            ptocurrency unregulated in your of cryptocurrencies es applicable in
            your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
