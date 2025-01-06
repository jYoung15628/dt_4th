import './App.css';
import Color from './color';
import Book from './book';
import {CounterFunction} from './CounterFunction';
import CounterClass from './CounterClass'

function App() {
  return (
      <div className="App">
          <Color></Color>
          <Book></Book>
          <hr />
          <CounterFunction></CounterFunction>
          <hr/>
          <CounterClass></CounterClass>
      </div>
  );
}

export default App;
