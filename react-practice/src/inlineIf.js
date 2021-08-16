import React from "react";
export default function UnreadMails (){

    function Mailbox(props){
        const unreadMessages = props.unreadMessages;
        return(
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                <h2>you have {unreadMessages.length} unread messages</h2>
                }
            </div>
        );
    }
const messages = ['React', 'Re: React','Re Re: React','Re: four'];

return <Mailbox unreadMessages ={messages}/>
}