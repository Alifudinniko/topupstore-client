import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGames from "../components/organisms/FeaturedGames";
import Reached from "../components/organisms/reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGames />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
