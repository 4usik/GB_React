import React from "react";
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem } from '@mui/material';
import '../components/style.css';

export function ChatList(props) {

  const { chats, addChat } = props;
    
  return (
    <Box sx={{ maxWidth: 360, position: 'absolute', top: '70px', left: '20px' }}>
      <nav aria-label="main mailbox folders">
          <List>
            {chats.map((chat) =>
              <ListItem key={`${chat.id}`} sx={{ color: 'white', margin: '20px' }} disablePadding>
                  <Link to={`/${chat.name}`} className='link'>{chat.name}</Link>
              </ListItem>
              )}
          </List>
          <Button onClick={ addChat }>Add Chat</Button>
      </nav>
    </Box>)
}




