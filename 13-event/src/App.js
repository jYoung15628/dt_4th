import './App.css';
import SynthesticEvent from './SynthesticEvent';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import HandlerEx from './ex/HandlerEx';
import Color from './ex/color';
import DisAble from './ex/disAble';
import Multi from './ex/Multi';
import Multi2 from './ex/Multi2';

function App() {
  return (
    <div className="App">
      <SynthesticEvent></SynthesticEvent>
      <hr/>
      <FuncComponent></FuncComponent>
      <hr/>
      <ClassComponent></ClassComponent>
      <hr/>
      <HandlerEx></HandlerEx>
      <hr/>
      <Color></Color>
      <hr/>
      <DisAble></DisAble>
      <hr/>
      <Multi></Multi>
      <hr/>
      <Multi2></Multi2>
    </div>
  );
}

export default App;
