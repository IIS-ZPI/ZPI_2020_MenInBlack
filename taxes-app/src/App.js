import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to taxes app!
        <br />
        <FormComponent>
        </FormComponent>
      </header>
    </div >
  );
}

export default App;
