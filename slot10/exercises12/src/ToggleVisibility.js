import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="my-4 text-center">
      <Button variant="info" onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Text
      </Button>
      {visible && <p className="mt-3">This is the text!</p>}
    </div>
  );
}
export default ToggleVisibility;
