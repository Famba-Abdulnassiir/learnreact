import React from "react";

export default function Ticking() {

    //broken down into smaller components to make Clock reusable..
    function Clock(props) {
        return (
            <div>
                <h1> Hello Timer Modified to</h1>
                <h2>it is {props.date.toLocaleTimeString()}</h2>
            </div>
        );     
    }
    
    function tick() {
        return <Clock date={new Date()}/>
        
    }

    return tick()
}
/*
Converting functional component above into a class is as below

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
*/