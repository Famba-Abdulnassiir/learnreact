 import React from "react"

class NameForm2 extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        //please avoid as much as u can the use of refs read more about it Use controlled components instead
        this.input = React.createRef();
    }

        handleSubmit(event){
            alert('A name was Submitted: ' + this.input.current.value);
            event.preventDefault();
        }
    render(){
        return(
            <form>
                <br/>
                Name:
                <label>
                    <input type="text" ref={this.input}/>
                </label>
                <label>
                    <input type="submit" value="submit"/>
                </label>
            </form>
        );
    }
}

export default NameForm2;