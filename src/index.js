import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Data from "./context.jsx/Data";
import Likes from "./context.jsx/Likes";
import Theme from "./context.jsx/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Data>
        <Likes>
          <Theme>
            <App />
          </Theme>
        </Likes>
      </Data>
    </BrowserRouter>
  </React.StrictMode>
);
