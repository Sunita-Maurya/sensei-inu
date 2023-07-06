"use client";
import Accordion from "@/components/Accordion/Accordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import HowToBuy from "@/components/HowToBuy/HowToBuy";
import MasterOfCripto from "@/components/MasterOfCripto/MasterOfCripto";
import TokenAirdrop from "@/components/TokenAirdrop/TokenAirdrop";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../components/Navbar/i18n.js";

export default function Home() {
  return (
    <main className="">
      <I18nextProvider i18n={i18n}>
        <Header />
        <MasterOfCripto />
        <HowToBuy />
        <TokenAirdrop />
        <Accordion />
        <Footer />
      </I18nextProvider>
    </main>
  );
}
