import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footerbanner from "../components/Footerbanner";

const Error = () => {
  return (
    <div>
      <header>
        <Logo />
        <Navigation />
      </header>
      <h1>Error</h1>
      <footer>
        <Footerbanner />
      </footer>
    </div>
  );
};

export default Error;
