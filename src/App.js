import React from 'react';

// import {InrementDecrement, CountDown} from './components'
// import CountDownTimer from './components/CountDownClassComponent'
import Carousal from './components/Carousal/Carousal';

import './App.css';

function App() {
  return (
    <div className="App">
					{/* <h2>Experimenting with React Hooks</h2>*}

      {/* <h5>Using State</h5>
      <InrementDecrement />

      <h5>Using State and Effect</h5>
      <CountDown minutes={5} />

      <h5> Count Down Timer </h5>
      <CountDownTimer minutes={5} /> */}
			<Carousal />
    </div>
  );
}

export default App;
