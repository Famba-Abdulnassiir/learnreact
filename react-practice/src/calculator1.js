import React from "react"
import BoilingVerdict from "./boilingPoint";


class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state ={temperature: ''};
    }

    handleChange(event){
        this.setState({temperature: event.target.value});
        event.preventDefault();
    }

    render(){
        const temparature = this.state.temperature;
        return(
            <fieldset>
                <legend>
                    Enter Temperature in Celsius:
                </legend>
                <input
                value ={temparature}
                onChange={this.handleChange}/>
                <BoilingVerdict celsius = {parseFloat(temparature)}
                />
            </fieldset>
        );
    }
}

export default Calculator;