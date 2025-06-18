import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function ControlledInput() {
  const [text, setText] = useState('Toan');
  return (
    <div className="my-4">
      <Form.Control
      type="text"
      value={text}
      placeholder='enter your name'
      onChange={(e) => setText(e.target.value)

      }
      
      
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}
export default ControlledInput;
