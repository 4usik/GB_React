import React from 'react';
import { Messages } from './Messages';
import { FormContainer } from './FormContainer';
import { useSelector } from "react-redux";
import { getMessagesList } from "../store/selectors/messages";

export function Chat({ name }) {
  
  const messagesList = useSelector(getMessagesList);
  const chat = messagesList[name] || [];

  return (
    <>
          <Messages name={name} chat={chat} />
          <FormContainer name={name} />
    </>

  );
}