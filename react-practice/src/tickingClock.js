import React from "react";

export default function Tick() {
    function tick() {
        const element = (
            <div>
                <h1> Hello timer</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );   
        return element;  
    }
    setInterval(tick, 1000)
    
return tick();  
}
