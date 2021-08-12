import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Formartname from "./Names";
import Rendered from "./renderingComponent";
import Compose from "./composingComponents";
import Comments from "./comment";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Formartname />
    <Rendered/>
    <Compose/>
    <Comments/>
  </StrictMode>,
  rootElement
);
