// import logo from './logo.svg';

import './App.css';
import Body from './components/Body/Body';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    /* inbuild
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hi
        </a>
      </header>
    </div>*/
    <>
    <NavBar/>
    <Body/>
    </>
  );
}

export default App;
