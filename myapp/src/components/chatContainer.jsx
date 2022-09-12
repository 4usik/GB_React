import React, { useEffect }  from 'react';
import { Messages } from './Messages';
import { FormContainer } from './FormContainer';
import { useSelector } from "react-redux";
import { getMessagesList } from "../store/selectors/messages";
import { setListenerDBChats } from "../firebase-db-utils";

export function Chat({ name }) {

  const list = Object.values(setListenerDBChats());
  const userId = list.filter((item) => item.name === name)[0].id;
  
  const messagesList = useSelector(getMessagesList);
  const chat = messagesList[userId] || [];

  useEffect(() => {
  }, [messagesList]);
  return (
    <>
          <Messages name={name} chat={chat} />
          <FormContainer name={name} />
    </>

  );
}