// src/NameCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

function NameCard() {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>LE CHI TRUNG</Card.Title>
        <Card.Text>
          Hello! I'm a student at FPT University Da Nang. I love React and UI design.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NameCard;
