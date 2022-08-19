import React from "react";
import { Message } from "./Message";
import '../style.css';

export const Messages = ({ messagesList }) => {
    return (
        <div className="messagesList">
            {
                messagesList.map((message) => <Message key={message.id} {...message} />)
            }
        </div>
    )
    
}



