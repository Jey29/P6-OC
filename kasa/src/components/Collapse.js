import React, { useState } from "react";
import arrowDown from "../assets/img/arrow-down.png";
import arrowUp from "../assets/img/arrow-up.png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="tittlearrow">
        <h2>{title}</h2>
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="Flèche"
          onClick={toggleCollapse}
        />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
