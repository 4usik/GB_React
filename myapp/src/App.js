import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Messages } from './components/Messages';
import { Form } from './components/Form';
import { ChatList } from './components/ChatList';
import { AUTHOR, BOT } from './components/constants';
import {NavbarPanel} from './components/navbar';
// import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from '@mui/material';

let timer;

const makeAppStyles = (theme) => {
  const { mode, background, grey } = theme.palette;

  return {
    background: mode === 'light' ? background.paper : grey[800],
  }
};

function App() {
  
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {

    if(messagesList[messagesList.length-1]?.author === AUTHOR) {

      clearTimeout(timer);

      timer = setTimeout(() => {
        setMessagesList((prevList) => ([
          ...prevList,
          {
            author: BOT,
            text: 'Я бот',
            id: prevList.length
          }
        ]))
      }, 2500);
    }

    return () => {
      clearTimeout(timer);
    };
    
  }, [messagesList]);

  const handleSendMessage = (msg) => {
    setMessagesList((prevList) => ([
      ...prevList,
      {
        author: AUTHOR,
        text: msg,
        id: prevList.length
      }
    ]));
  }

  return (
    // <ThemeProvider>
      <>
      <CssBaseline />
      <Box sx={makeAppStyles}>
        <div className="App">
          <NavbarPanel />
          <ChatList />
          <Messages messagesList={messagesList} />
          <Form onSendMessage={handleSendMessage}/>
        </div>
      </Box>
      </>
    // </ThemeProvider>
  );
}

export default App;
