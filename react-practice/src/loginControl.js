import React from "react";

export default function LoginControl(){

class LoginControls extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn:false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }
    
    function UserGreeting(props) {
        return <h1>Welcome back</h1>;
    }
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
        return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
    
    function LoginButton(props) {
        return (
        <button onClick={props.onClick}>
            Login
        </button>
        );
    }
    
    function LogoutButton(props) {
        return (
        <button onClick={props.onClick}>
            Logout
        </button>
        );
    }
    /*Please not in this example this is so long code for reading and interpretation
    if in real life kindly breakdown this into different resuable components. */

    return <LoginControls/>
}