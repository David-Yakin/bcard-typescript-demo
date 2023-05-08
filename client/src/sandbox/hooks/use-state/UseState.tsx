import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: 16 }}>
      <p>{counter}</p>
      <button
        style={{ padding: 2, margin: 1 }}
        onClick={() => setCounter(prev => prev + 1)}>
        +
      </button>
      <button
        style={{ padding: 2, margin: 1 }}
        onClick={() => setCounter(prev => prev - 1)}>
        -
      </button>

      <button
        style={{ padding: 2, margin: 1 }}
        onClick={() => setCounter(prev => prev * 2)}>
        multiple
      </button>

      <button style={{ padding: 2, margin: 1 }} onClick={() => setCounter(0)}>
        reset
      </button>
    </div>
  );
};

export default UseState;
