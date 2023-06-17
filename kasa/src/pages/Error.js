import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footerbanner from "../components/Footerbanner";
import ImgError from "../assets/img/404.png";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="wrapper">
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        <div className="error-bloc">
          <div className="error-number">
            <img src={ImgError} alt="erreur 404" />
          </div>
          <div className="error-paragraphe">
            <p>Oups! La page que vous demandez n'existe pas.</p>
          </div>
          <NavLink to="/" activeclassname="active">
            <li className="error-li">Retourner sur la page d'accueil</li>
          </NavLink>
        </div>
      </main>
      <footer>
        <Footerbanner />
      </footer>
    </div>
  );
};

export default Error;
