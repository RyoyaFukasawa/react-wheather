// import logo from './logo.svg';
import './App.css';
// import DangerButton from './components/DangerButton';
import { Weather } from './weather/weather.jsx';

function App() {
  // const dangerStyle = {
  //   backgroundColor: 'red',
  //   width: '100px',
  //   height: '50px',
  // };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      {/* <DangerButton onClick={() => alert('Danger!')} label="Danger Button" style={dangerStyle} /> */}
      <Weather></Weather>
    </div>
  );
}

export default App;
