import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainApp from './components/MainApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to taxes app!
      </header>
      <br />
      <MainApp />
    </div >
  );
}

export default App;
