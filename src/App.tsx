import React from 'react';
import { Heading } from './components/Heading';
import Identity from './components/Identity';
import logo from './logo.svg';
import './App.css';

const myIdentityFunction = ( input: string ): string => {
  return `Wondering why we are number ONE! ${input}`; // template literal format
  // return 'Wondering why we are number ONE! ' + input; normal or traditional way.
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Identity name="Smith Jones" age="26" role="Data Scientist" department="TechData" displayMethod={myIdentityFunction} />
      </header>
    </div>
  );
}

export default App;
