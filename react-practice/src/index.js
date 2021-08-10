import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Formartname from "./Names";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Formartname />
  </StrictMode>,
  rootElement
);
