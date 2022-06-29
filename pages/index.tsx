import type { NextPage } from "next";
import Fiture from "../components/Sections/Fiture";
import HeroSections from "../components/Sections/HeroSections";
import Teknologi from "../components/Sections/Teknologi";

const Home: NextPage = () => {
  return (
    <>
      <HeroSections />
      <Fiture />
      <Teknologi />
    </>
  );
};

export default Home;
