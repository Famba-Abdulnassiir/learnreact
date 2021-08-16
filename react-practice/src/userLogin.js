import React from "react";

export default function UserLogin(){

    function UserGreeting(props){
        return <h1>Welcome back</h1>;
    }

    function GuestGreeting(props){
        return <h1>Please sign up</h1>;
    }

    function Greetings(props){
        const isLoggedIn = props.isLoggedIn;
        if(isLoggedIn){
            return <UserGreeting/>;
        }
        return <GuestGreeting/>;
    }

    //you can try switching true with false to see the changes.
    return <Greetings isLoggedIn={false}/>
}
