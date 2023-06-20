import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
// crée une racine de rendu React et rend l'application principale à l'intérieur de cette racine.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
