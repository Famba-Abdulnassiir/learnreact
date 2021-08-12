import { func } from "prop-types";
import { ReactDOM } from "react-dom";

export default function Compose(){
    //components can refer to other components as there outputs Welcome() used as output from Add()
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>        
    }

    function Add() {
        return (
            <div>
                <Welcome name="Famba"/>
                <Welcome name="Shadia"/>
                <Welcome name="Nassiwa"/>
            </div>
        );        
    }
return Add()
}