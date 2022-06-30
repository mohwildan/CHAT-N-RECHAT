import type { NextPage } from "next";
import Faq from "../components/Sections/Faq";
import Fiture from "../components/Sections/Fiture";
import HeroSections from "../components/Sections/HeroSections";
import Quesition from "../components/Sections/Quesition";
import Store from "../components/Sections/Store";
import Teknologi from "../components/Sections/Teknologi";

const Home: NextPage = () => {
  return (
    <>
      <HeroSections />
      <Fiture />
      <Teknologi />
      <Store />
      <Quesition />
      <Faq />
    </>
  );
};

export default Home;
