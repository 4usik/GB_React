import React from "react";
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../components/style.css';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../constants/addChat";
import { deleteMessagesWithChat } from "../constants/addMessage";
import { getChatList } from "../store/selectors/chats";

export function ChatList() {
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

  return (
    <Box sx={{ maxWidth: 360, position: 'absolute', top: '70px', left: '20px' }}>
      <nav aria-label="main mailbox folders">
          <List>
            {chats.map((chat) =>
              <ListItem key={`${chat.id}`} sx={{ color: 'white', margin: '20px' }} disablePadding>
                  <Link to={`/${chat.name}`} className='link'>{chat.name+ '  '}</Link>
                  <DeleteIcon sx={{marginLeft: '20px'}} id={`${chat.id}`} onClick={delChat}/>
              </ListItem>
              )}
          </List>
          <Button onClick={handleChange}>Add Chat</Button>
      </nav>
    </Box>)
}




