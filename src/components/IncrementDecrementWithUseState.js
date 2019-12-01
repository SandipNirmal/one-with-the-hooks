import React, {useState} from 'react'

export const InrementDecrement = () => {
  const [number, setNumber] = useState(0)

  return (
    <div>
      <h4>Current Value: {number}</h4>
      <p>Click button to increment the number</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </div>
  );
}
