import React from 'react';
import './App.css';
import { Fruit } from './components/Fruit';
import { Message } from './components/Message';
import { Form } from './components/Form';
import { MessagesList } from './components/MessagesList';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        {/* My First React App */}

        {/* <Message name="Tatiana" status="done!"></Message> */}
        {/* <Fruit></Fruit> */}
        <Form />
        {/* <MessagesList /> */}
  
      </header>
    </div>
  );
}

export default App;
