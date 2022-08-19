import React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { ColorModeSwitch } from './color-mode-switch';

export const NavbarPanel = () => {
  return (
    <Box sx={{ flexGrow: 1, minWidth: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#282c34', color: '#1976d2' }}>
        <Toolbar>
          <IconButton sx={{ color: '#1976d2' }}>
            <DehazeIcon />
          </IconButton>
          <IconButton sx={{ color: '#1976d2' }}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            CHATS
          </Typography>
          <ColorModeSwitch />
        </Toolbar>
      </AppBar>
    </Box>
  );
}