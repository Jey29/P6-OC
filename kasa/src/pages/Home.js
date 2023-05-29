import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import Footerbanner from "../components/Footerbanner";

const Home = () => {
  return (
    <div>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        <Banner />
      </main>
      <footer>
        <Footerbanner />
      </footer>
    </div>
  );
};

export default Home;
