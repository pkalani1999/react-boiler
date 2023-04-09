import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";

// npm i -g npm-check-updates
// ncu -u

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
