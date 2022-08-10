import React from 'react';
import './App.css';
import { Fruit } from './components/Fruit';
import { Message } from './components/Message';
import { MessagesList } from './components/MessagesList';
import { Form } from './components/Form';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        {/* My First React App */}

        {/* <Message name="Tatiana" status="done!"></Message> */}
        {/* <Fruit></Fruit> */}
        {/* <MessagesList arr = {[]} /> */}
        <Form />
  
      </header>
    </div>
  );
}

export default App;
