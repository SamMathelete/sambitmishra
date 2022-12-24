import { FC } from "react";
import HomeDesc from "../components/HomePage/HomeDesc";
import HomeLogo from "../components/HomePage/HomeLogo";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <HomeLogo />
      <HomeDesc />
      <Footer />
    </>
  );
};

export default HomePage;
