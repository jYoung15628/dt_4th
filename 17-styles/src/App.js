import './App.css';
import BasicCss from './components/BasicCss';
import CssModuleComponents from './components/CssModuleComponents'
import Mixin from './components/Mixin';
import SassComponent from './components/SassComponent';
import StyledComponent from './components/StyledComponent';
import Warm from './components/Warm';

function App() {
  return (
      <div className="App">
          <BasicCss></BasicCss>
          <CssModuleComponents></CssModuleComponents>
          <SassComponent></SassComponent>
          <hr />
          <StyledComponent></StyledComponent>
          <hr/>
          <Warm></Warm>
          <hr/>
          <Mixin></Mixin>
      </div>
  );
}

export default App;
