import { func } from "prop-types";
import { ReactDOM } from "react-dom";

//elements can represent user-definec components

export default function Rendered (){
    const element = <Welcome name="Vero Nassiwa"/>;
    
    function Welcome(props) {
        return <h1>Hello {props.name}</h1>        
    }

    return element;
}

