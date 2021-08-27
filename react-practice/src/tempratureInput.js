import React from "react"
import BoilingVerdict from "./boilingPoint";

const scaleNames = {
    c:'Celisius',
    f: 'Fahrenheit'
}

class TempratureInput extends React.Component{
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
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>
                    Enter Temperature in {scaleNames[scale]}:
                </legend>
                <input
                value ={temparature}
                onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default TempratureInput;