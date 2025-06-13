import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center my-4">
      <h3>Count: {count}</h3>
      <Button variant="primary" onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}
export default Counter;
