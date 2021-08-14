import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Formartname from "./Names";
import Rendered from "./renderingComponent";
import Compose from "./composingComponents";
import Comments from "./comment";
import Tick from "./tickingClock";
import Ticking from "./tickingModified";
import Clock from "./stateClock";
import Form from "./preventDefault";
import Toggle from "./toggle";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Formartname />
    <Rendered/>
    <Compose/>
    <Comments/>
    <Tick/>
    <Ticking/>
    <Clock/>
    <Form/>
    <Toggle/>
  </StrictMode>,
  rootElement
);
