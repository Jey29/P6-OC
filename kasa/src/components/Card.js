import React from "react";
import AppartData from "../datas/apartments.json";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="gallerycard">
      {AppartData.map((item, i) => (
        <div className="card" key={i}>
          <h2>{item.title}</h2>
          <div className="covercard">
            <NavLink
              to={`/Accommodation/${item.id}`}
              className="custom-card"
              activevlassname="active"
            >
              <img src={item.cover} alt="" />
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
