import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button variant="danger" onClick={() => setCount(count + 1)}>
        Click me
        </Button>
    </div>
  );
}

export default Counter;