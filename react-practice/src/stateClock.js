import { ReactDOM } from "react-dom";
import React from "react";

    class Clock extends React.Component{
        constructor(props){
            super(props);
            this.state ={date: new Date()};
        }
        //Please note this lifecycle methods should be used with alot of care or if simple Apps avoid them.
            componentDidMount() {
                this.timerID = setInterval(
                () => this.tick(),
                1000
                );
            }
            
            componentWillUnmount() {
                clearInterval(this.timerID);
            }
            
            tick() {
                this.setState({
                date: new Date()
                });
            }

        render(){
            return(
                <div>
                    <h1>Hello, Clock with state</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            );
        }
    }

    export default Clock;
