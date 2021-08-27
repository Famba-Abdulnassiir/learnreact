import React from "react"
import TempratureInput from "./tempratureInput";

class Calculator extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <TempratureInput scale="c"/>
                <TempratureInput scale="f"/>
            </div>
        );  
    }
}

export default Calculator;