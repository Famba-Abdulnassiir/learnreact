import React from "react"

class EssayFrom extends React.Component {
    constructor(props){
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('An Essay was submited: '+ this.state.value);
        event.preventDefault();        
    }

    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay: 
                    <textarea placeholder="please Enter your Essay here" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
            <br/>
            </div>
        );
    }
}

export default EssayFrom;