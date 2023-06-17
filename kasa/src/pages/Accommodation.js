import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppartData from "../datas/apartments.json";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footerbanner from "../components/Footerbanner";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import RatingStar from "../assets/img/star-active.png";
import RatingStarInactive from "../assets/img/star-inactive.png";

const Accommodation = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundApartment = AppartData.find((item) => item.id === id);
    setApartment(foundApartment);
  }, [id]);

  if (!apartment) {
    navigate("/error");
    return null;
  }

  return (
    <div className="wrapper">
      <header>
        <Logo />
        <Navigation />
      </header>
      <main className="main-accommodation">
        <Slideshow images={apartment.pictures} />
        <section className="section-accommodation">
          <div className="bloc-infos">
            <div className="infos-bien">
              <h2>{apartment.title}</h2>
              <p className="location">{apartment.location}</p>
              <div className="tags-bloc">
                {apartment.tags.map((tag, index) => (
                  <div key={`tag_${index}`} className="tags">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="owner-bloc">
              <div className="starSnippets-bloc">
                {Array.from({ length: 5 }, (_, index) => (
                  <img
                    key={`rating_${index}`}
                    src={
                      index < apartment.rating ? RatingStar : RatingStarInactive
                    }
                    alt="rating"
                  />
                ))}
              </div>
              <div className="host">
                <p className="name">{apartment.host.name}</p>
                <img
                  className="picture-owner"
                  src={apartment.host.picture}
                  alt="host"
                />
              </div>
            </div>
            <div className="duo-Collapse">
              <div className="Collapse Collapse-bien Collapse-left">
                <Collapse title="Description" className="Collapse-title">
                  <div className="Collapse-content">
                    {apartment.description}
                  </div>
                </Collapse>
              </div>
              <div className="Collapse Collapse-bien Collapse-right">
                <Collapse title="Équipements" className="Collapse-title">
                  <ul className="Collapse-content">
                    {apartment.equipments.map((equipment, index) => (
                      <li key={`equipment_${index}`}>{equipment}</li>
                    ))}
                  </ul>
                </Collapse>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footerbanner />
      </footer>
    </div>
  );
};

export default Accommodation;
