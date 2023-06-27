import Accordion from "@/components/Accordion/Accordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import HowToBuy from "@/components/HowToBuy/HowToBuy";
import MasterOfCripto from "@/components/MasterOfCripto/MasterOfCripto";
import TokenAirdrop from "@/components/TokenAirdrop/TokenAirdrop";

export default function Home() {
  return (
    <main className="">
      <Header />
      <MasterOfCripto />
      <HowToBuy />
      <TokenAirdrop />
      <Accordion />
      {/* <Footer/>   */}
    </main>
  );
}
