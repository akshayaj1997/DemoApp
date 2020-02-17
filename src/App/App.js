import React from 'react';
import './App.css';
import DemoCounter from './Components/DemoCounter';

function App() {
  return (
    <div className="App">
      <DemoCounter passValue ={"This is a counter"}></DemoCounter>
    </div>
  );
}

export default App;
