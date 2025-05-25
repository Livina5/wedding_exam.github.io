import logo from './logo.svg';
import './App.css';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
      <Slider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Wedding day
        </h1>
      </header>
    </div>
  );
}

export default App;