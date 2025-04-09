import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Pixabaystate from "./Context/Pixabaystate";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Pixabaystate>
    <App />
  </Pixabaystate>
);
