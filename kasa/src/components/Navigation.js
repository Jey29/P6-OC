import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigations;
