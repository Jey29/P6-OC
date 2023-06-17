import React from "react";

const Footerbanner = () => {
  return (
    <div className="footer">
      <img
        className="logofooter"
        src={process.env.PUBLIC_URL + "/img/LOGOFOOTER.png"}
        alt="logo kasa"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footerbanner;
