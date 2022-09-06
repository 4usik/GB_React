import React, { useEffect }  from 'react';
import { Messages } from './Messages';
import { FormContainer } from './FormContainer';
import { useSelector } from "react-redux";
import { getMessagesList } from "../store/selectors/messages";
import { writeMessagesData } from '../firebase-db-utils';

export function Chat({ name }) {
  
  const messagesList = useSelector(getMessagesList);
  const chat = messagesList[name] || [];

  useEffect(() => {
    writeMessagesData(messagesList);
  }, [messagesList]);

  return (
    <>
          <Messages name={name} chat={chat} />
          <FormContainer name={name} />
    </>

  );
}