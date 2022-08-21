import React from 'react';
import { useState, useEffect } from 'react';
import { Messages } from './Messages';
import { Form } from './Form';
import { AUTHOR, BOT } from '../constants';

let timer;

export function Chat(props) {

  const { name } = props;
  
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {

    if(messagesList[messagesList.length-1]?.author === AUTHOR) {

      clearTimeout(timer);

      timer = setTimeout(() => {
        setMessagesList((prevList) => ([
          ...prevList,
          {
            author: BOT,
            text: 'Я бот',
            id: prevList.length
          }
        ]))
      }, 2500);
    }

    return () => {
      clearTimeout(timer);
    };
    
  }, [messagesList]);

  const handleSendMessage = (msg) => {
    setMessagesList((prevList) => ([
      ...prevList,
      {
        author: AUTHOR,
        text: msg,
        id: prevList.length
      }
    ]));
  }

  return (
    <>
          {/* <span>{name}</span> */}
          <Messages messagesList={messagesList} name={name} />
          <Form onSendMessage={handleSendMessage}/>
    </>
  );
}