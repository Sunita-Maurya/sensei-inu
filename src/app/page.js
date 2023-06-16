import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      <div className="header-bg">
        <div className="container mx-auto">
          <Navbar />
          <Header />
        </div>
      </div>
    </main>
  );
}
