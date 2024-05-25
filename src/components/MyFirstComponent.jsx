import React from 'react';
import { useState } from 'react';

export const MyFirstComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>{counter}</h3>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Incrementar
      </button>
    </div>
  );
};
