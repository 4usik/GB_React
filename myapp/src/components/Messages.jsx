import React from "react";
import { Message } from "./Message";
import '../components/style.css';

export const Messages = ({ messagesList, name }) => {
    return (
    <>
        
        <div className="messagesList">
            <div className="chatName">{name}</div>
            {
                messagesList.map((message) => <Message key={message.id} {...message} />)
            }
        </div>
    </>
        
    )
    
}



