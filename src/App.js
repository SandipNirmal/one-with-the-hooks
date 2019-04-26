import React from 'react';

import {InrementDecrement, CountDown} from './src'

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Experimenting with React Hooks</h2>

      <h5>Using State</h5>
      <InrementDecrement />

      <h5>Using State and Effect</h5>
      <CountDown minutes={5} />

    </div>
  );
}

export default App;
