import React from "react";

export default function DoubleModified(){

    function NumberList(props){
        const numbers = props.numbers;
        const double = numbers.map((number) => 
        <li key={number.toString()}>{number*2}</li>);
    
    return (
        <div>
            <h3>Double numbers modified to be rendered inside a component</h3>
            <ul>{double}</ul>
        </div>
    );
    }
    
    const numbers = [1, 2, 3, 4, 5];

return (<NumberList numbers={numbers}/>);
}