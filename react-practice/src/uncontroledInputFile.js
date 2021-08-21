import React from "react"
class Fileinput extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event){
        alert(`
        selected file ${this.Fileinput.current.files[0].name}`);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <br/>
                <label>
                Upload file:
                <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Submit</button>
        </form>
        );
    }
}

export default Fileinput;