import React from "react";
import '../components/style.css';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../constants/addChat";
import { deleteMessagesWithChat } from "../constants/addMessage";
import { getChatList } from "../store/selectors/chats";
import { ChatList } from "./ChatList";

export function ChatListContainer() {
  const dispatch = useDispatch();
  const chats = useSelector(getChatList);

  const handleChange = () => {
    dispatch(addChat());
  };

  const delChat = (e) => {
    const id = e.currentTarget.id;
    dispatch(deleteChat(id));
    dispatch(deleteMessagesWithChat(id));
  };

  return <ChatList chats={chats} handleChange={handleChange} delChat={delChat} />
}




