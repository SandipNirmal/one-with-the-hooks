import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)

  return (
    <div className="App">
      <h2>Experimenting with React Hooks</h2>

      <h4>Current Value: {number}</h4>

      <p>Click button to increment the number</p>

      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </div>
  );
}

export default App;
