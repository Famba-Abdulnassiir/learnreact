import React from "react";

function Containment(){


function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-'+ props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p  className="Dialog-message">
                Thank you for  Visiting our Fans Solutions Company!
            </p>
        </FancyBorder>

    );
}

return <WelcomeDialog />
}
export default Containment;