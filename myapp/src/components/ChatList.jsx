import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

export function ChatList() {
    const chats = [
        {id: 1,
        name: 'family'},
        {id: 2,
        name: 'work'},
        {id: 3,
        name: 'study'}
    ];

    return (chats.map((chat) =>
            <Box sx={{ width: '100%', maxWidth: 360 }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: 'white' }}>
                      {chat.name}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>))
}




