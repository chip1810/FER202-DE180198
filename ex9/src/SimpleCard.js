// src/SimpleCard.js
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

function SimpleCard() {
  return (
    <Card className="p-3 mb-4" style={{ width: '400px' }}>
      <Row>
        <Col xs={4} className="d-flex justify-content-center align-items-center">
          <Image
              src="/images/logofpt.jpg"
                width={80}

          />
        </Col>
        <Col>
          <h5 className="text-warning mb-1">LE CHI TRUNG - FPT University</h5>
          <small className="text-muted">Mobile: 113.</small>
        </Col>
      </Row>
    </Card>
  );
}

export default SimpleCard;
