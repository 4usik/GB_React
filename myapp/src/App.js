import React from 'react';
import './App.css';
import { Fruit } from './components/Fruit';
import { Message } from './components/Message';
import { RenderPage } from './components/RenderPage';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        {/* My First React App */}

        {/* <Message name="Tatiana" status="done!"></Message> */}
        {/* <Fruit></Fruit> */}
        <RenderPage />
  
      </header>
    </div>
  );
}

export default App;
