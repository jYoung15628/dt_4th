import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import Example1 from './ex/Example1';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import PostList from './ex/PostList';

function App() {
  return (
      <div className="App">
          <RefSample1></RefSample1>
          <RefSample2></RefSample2>
          <RefSample3></RefSample3>
          <hr />
          <Example1></Example1>
          <hr />
          <LifeCycleClass></LifeCycleClass>
          <hr />
          <LifeCycleFunc></LifeCycleFunc>
          <hr />
          <PostList></PostList>
      </div>
  );
}

export default App;
