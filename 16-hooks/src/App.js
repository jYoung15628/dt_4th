import './App.css';
import UseCallBackEx from './UseCallbackEx';
import UseCallbackEx2 from './UseCallbackEx2';
import PriceLimit from './PriceLimit';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeMiddle } from './components/ThemeMiddle';
import Faq from './components/Faq';
import UseMemoEx from './UseMemoEx';
import Form from './components/react-hook-form/Form';
import Age from './components/react-hook-form/age';


function App() {
  return (
    <div className="App">
      {/* <UseMemoEx></UseMemoEx> */}
      {/* <UseCallBackEx></UseCallBackEx>
      <UseCallbackEx2 postID={7}></UseCallbackEx2>
      <hr/>
      <PriceLimit></PriceLimit> */}
      {/* <ThemeProvider> */}
        {/* <ThemeMiddle></ThemeMiddle> */}
      {/* </ThemeProvider> */}
      {/* <Faq></Faq> */}
      <hr/>
      <Form></Form>
      <hr/>
      <Age></Age>
    </div>
  );
}

export default App;
