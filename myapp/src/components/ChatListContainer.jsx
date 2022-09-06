import React, { useEffect } from "react";
import '../components/style.css';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../constants/addChat";
import { deleteMessagesWithChat } from "../constants/addMessage";
import { getChatList } from "../store/selectors/chats";
import { ChatList } from "./ChatList";
import { setListenerDB, writeChatData } from "../firebase-db-utils";
import { getMessagesList } from "../store/selectors/messages";

export function ChatListContainer() {
  const dispatch = useDispatch();
  const chats = useSelector(getChatList);
  const messagesList = useSelector(getMessagesList);

  useEffect(() => {
    writeChatData(chats, messagesList);
    setListenerDB();
  }, [chats, messagesList]);

  const handleChange = () => {
    dispatch(addChat());
  };

  const delChat = (e) => {
    const id = e.currentTarget.id;
    console.log(id);
    dispatch(deleteChat(id));
    dispatch(deleteMessagesWithChat(id));
  };

  return <ChatList chats={chats} handleChange={handleChange} delChat={delChat} />
}




