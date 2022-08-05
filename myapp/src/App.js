import './App.css';
import { Message } from './components/Message';

function App(props) {
  const done = 'done!';
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello! { props.name }!</h3>
        <Message name={ done }></Message>
      </header>
    </div>
  );
}

export default App;
