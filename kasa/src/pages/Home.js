import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footerbanner from "../components/Footerbanner";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="bloc-principale">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main className="main-home">
          <div className="cover">
            <h1>Chez vous, partout et ailleurs</h1>
            <div>
              <img src="./img/falaises.png" alt="" />
            </div>
          </div>
          <Card />
        </main>
      </div>
      <footer>
        <Footerbanner />
      </footer>
    </div>
  );
};

export default Home;
