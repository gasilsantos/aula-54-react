import './App.css';
import HelloWorldDIO from './components/helloworldDIO'; 
import HelloWorldDIOclass from './components/helloworldDIOclass';
import HelloWorldDev from './components/HelloWorld';
import HelloWorldcalculadora from './components/HelloWorldcalculadora';
function App() {
  return (
    <div className="App">
      <HelloWorldDIO/>
      <HelloWorldDIOclass/>
      <HelloWorldDev name="gabriel"/>
      <HelloWorldcalculadora n1={6}n2={72}/>

      
    </div>
  );
}

export default App;
