import React from 'react';
import './App.css';
import {NavbarPanel} from './components/navbar';
// import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from '@mui/material';

const makeAppStyles = (theme) => {
  const { mode, background, grey } = theme.palette;

  return {
    background: mode === 'light' ? background.paper : grey[800],
  }
};

function App() {

  return (
    <>
      <CssBaseline />
      <Box sx={makeAppStyles}>
        <div className="App">
          <NavbarPanel />
        </div>
      </Box>
    </>
  );
}

export default App;
