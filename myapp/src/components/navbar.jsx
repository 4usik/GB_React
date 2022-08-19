import React from 'react';
import {AppBar, Button, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import '../style.css';
import { Homepage } from './home-page';
import { Profile } from './profile';
import { Chat } from './chat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { PageNotFound } from './notFound';

import { ColorModeSwitch } from './color-mode-switch';

const chats = [
  {
    id: 1,
    name: 'family',
    messages: ['jklk']
},
  {
    id: 2,
    name: 'work',
    messages: ['jknl', 'lkopp']
},
  {
    id: 3,
    name: 'study',
    messages: ['jkhioopl', 'lloiu', 'dtyhuk']
}
];

export const NavbarPanel = () => {
  return (
    <Box sx={{ flexGrow: 1, minWidth: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#282c34', color: '#1976d2' }}>
      <BrowserRouter>
        <Toolbar>
          <Button sx={{ color: '#1976d2' }}>
            <Link to="/" className='link'>Home</Link>
          </Button>
          <Button sx={{ color: '#1976d2' }}>
            <Link to="/profile" className='link'>Profile</Link>
          </Button>
          <IconButton sx={{ color: '#1976d2' }}>
            <Link to="/chat" className='link'><ChatBubbleOutlineIcon /></Link>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            NameSurname
          </Typography>
          <ColorModeSwitch />
        </Toolbar>
        <Switch>
          <Route exact path="/" render = {() => <Homepage chats = {chats} /> } />

          <Route exact path="/profile/" component={Profile} />

          <Route exact path="/chat/" component={Chat} />
          
          <Route
            path="/:name?"
            render = {({ match }) => {

              const { name } = match.params;
              const chat = chats.find((el) => el.name === name);
              if (!chat) {return <PageNotFound />}

              return <Chat {...chat} />
            }}
            />

          </Switch>
        </BrowserRouter>
      </AppBar>
    </Box>
  );
}