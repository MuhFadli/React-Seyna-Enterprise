// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './Components/header';
import Body from './Components/body';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <Body />
    </Fragment>
  );
}

export default App;
