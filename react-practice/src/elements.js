//Rendering the and updating Rendered Element
import  ReactDOM  from "react";

export default function tick(){
    const element = document.getElementById('root');
        
    ReactDOM.render(<div>
        <h1>Here is a rendered Element</h1>
        <h2>it is {new Date().toLocaleTimeString()}</h2>
        </div>,element);
}

setInterval(tick, 1000)
