import React from "react";
import { Message } from "./Message";
import '../components/style.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AUTHOR } from "../constants";
import { addBotMessage } from "../constants/addMessage";
import { getMessagesList } from "../store/selectors/messages"

let timer;

export const Messages = ({ name }) => {
    const messagesList = useSelector(getMessagesList);
    const chat = messagesList[name] || [];
    const dispatch = useDispatch();
    

    useEffect(() => {

        if(chat[chat.length-1]?.author === AUTHOR) {
    
          clearTimeout(timer);
    
          timer = setTimeout(() => {
            dispatch(addBotMessage(name));
          }, 2500);
        }
    
        return () => {
          clearTimeout(timer);
        };
        
      });

    return (
    <>
        
        <div className="messagesList">
            <div className="chatName">{name}</div>
            {
                chat.map((message) => <Message key={message.id} {...message} />)
            }
        </div>
    </>
        
    )
    
}



