import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function ColorSwitcher() {
  const [color, setColor] = useState('white');

  return (
    <div className="my-4">
      <Form.Select onChange={(e) => setColor(e.target.value)}>
        <option value="white">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </Form.Select>
      <div style={{ backgroundColor: color, height: '100px', marginTop: '20px' }} />
    </div>
  );
}
export default ColorSwitcher;
