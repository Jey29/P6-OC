import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img src={process.env.PUBLIC_URL + "/img/Logo.png"} alt="Logo Kasa" />
    </div>
  );
};

export default Logo;
