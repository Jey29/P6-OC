import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footerbanner from "../components/Footerbanner";

const About = () => {
  return (
    <div>
      <header>
        <Logo />
        <Navigation />
      </header>
      <footer>
        <Footerbanner />
      </footer>
    </div>
  );
};

export default About;
