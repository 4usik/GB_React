import React from "react";
import { Message } from "./Message";
import '../components/style.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AUTHOR } from "../constants";
import { addBotMessage } from "../constants/addMessage";

let timer;

export const Messages = ({ name }) => {
    
    const messagesList = useSelector((state) => state.messages.messageList[name] || []);
    const dispatch = useDispatch();

    useEffect(() => {

        if(messagesList[messagesList.length-1]?.author === AUTHOR) {
    
          clearTimeout(timer);
    
          timer = setTimeout(() => {
            dispatch(addBotMessage(name));
          }, 2500);
        }
    
        return () => {
          clearTimeout(timer);
        };
        
      }, [messagesList]);

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



