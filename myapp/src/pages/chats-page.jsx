import React from 'react';
import '../components/style.css';
import { ChatList } from '../components/ChatList';

export function Chats(props) {

  const { chats, addChat } = props;

  return (
        <ChatList chats = { chats } addChat={addChat} />
  );
}