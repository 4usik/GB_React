import React from 'react';
import './App.css';
import {NavbarPanel} from './components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme-provider';
import { Box, CssBaseline } from '@mui/material';
import './components/style.css';

import { Homepage } from './pages/home-page';
import { Profile } from './pages/profile-page';
import { Chats } from './pages/chats-page';
import { Chat } from './components/chatContainer';
import { PageNotFound } from './pages/page-not-found';
import { getChatList } from './store/selectors/chats';
import { useSelector } from 'react-redux';

function App() {

  const chatList = useSelector(getChatList);

  return (
    
      <BrowserRouter>
        <CssBaseline />
          <ThemeProvider>
            <Box>
              <div className="App">
                <NavbarPanel />
              </div>
            </Box>
          
            <Switch>

                <Route exact path="/profile/" component={Profile} />

                <Route exact path="/chats/" > <Chats /> </Route>

                <Route exact path="/" component={Homepage} />

                <Route
                  path="/:name?"
                  render = {({ match }) => {

                    const { name } = match.params;
                    const chat = chatList.find((el) => el.name === name);
                    if (!chat) {return <PageNotFound />}

                    return <Chat {...chat} />
                  }}
                />

              </Switch>
            </ThemeProvider>
      </BrowserRouter>
    
    
      
  );
}

export default App;
