import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footerbanner from "../components/Footerbanner";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div className="wrapper">
      <div className="bloc-principale">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main className="main-about">
          <div className="cover2">
            <img src="./img/montagnes.png" alt="" />
          </div>
          <div className="container">
            <div className="Collapse">
              <Collapse title="Fiabilité">
                {
                  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                }
              </Collapse>
            </div>
            <div className="Collapse">
              <Collapse title="Respect">
                {
                  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                }
              </Collapse>
            </div>
            <div className="Collapse">
              <Collapse title="Service">
                {
                  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                }
              </Collapse>
            </div>
            <div className="Collapse">
              <Collapse title="Sécurité">
                {
                  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                }
              </Collapse>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footerbanner />
      </footer>
    </div>
  );
};

export default About;
