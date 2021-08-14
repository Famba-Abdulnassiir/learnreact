import React from "react"

export default function Form() {
    function handleSubmit(e){
        e.preventDefault();
        console.log("you clicked me");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
        <br/>
        </div>        
        
      
    )
}