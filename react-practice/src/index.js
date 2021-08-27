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
import UserLogin from "./userLogin";
import LoginControl from "./loginControl";
import UnreadMails from "./inlineIf";
import DoubleNumbers from "./doubleNumbers";
import DoubleModified from "./doubleNumberModified"
import Blogs from "./blogKeys";
import NameForm from "./controlledForm";
import EssayFrom from "./textAreatag";
import FlavorForm from "./selectTag";
import Reservation from "./multipleInputs";
import NameForm2 from "./uncontrolledComponent1";
import Fileinput from "./uncontroledInputFile";
import Calculator from "./calculator";

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
    <UserLogin/>
    <LoginControl/>
    <UnreadMails/>
    <DoubleNumbers/>
    <DoubleModified/>
    <Blogs/>
    <NameForm/>
    <EssayFrom/>
    <FlavorForm/>
    <Reservation/>
    <NameForm2/>
    <Fileinput/>
    <Calculator/>
  </StrictMode>,
  rootElement
);
