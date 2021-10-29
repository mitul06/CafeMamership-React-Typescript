import React from 'react';
import './assets/css/style.css'
import HomePage from './components/HomePage';
import MultipleForms from './components/MultipleForms';

function App() {
  return (
    <>
    <HomePage />
    <div className="App">
      
      <header className="App-header">
        <MultipleForms />
      </header>
    </div>
    </>
  );
}

export default App;
