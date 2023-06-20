import Accordion from "@/components/Accordion/Accordion";
import Header from "@/components/Header/Header";
import HowToBuy from "@/components/HowToBuy/HowToBuy";
import MasterOfCripto from "@/components/MasterOfCripto/MasterOfCripto";
import Navbar from "@/components/Navbar/Navbar";
import TokenAirdrop from "@/components/TokenAirdrop/TokenAirdrop";

export default function Home() {
  return (
    <main className="">
      <div className="header-bg">
        <div className="container mx-auto">
          <Navbar />
          <Header />
        </div>
        <MasterOfCripto />
        <HowToBuy />
        <TokenAirdrop />
        <Accordion />
      </div>
    </main>
  );
}
