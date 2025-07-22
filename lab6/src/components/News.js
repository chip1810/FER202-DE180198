import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { newsList } from '../data/newsData'; // Đảm bảo đường dẫn đúng

function News() {
  return (
    <Container>
      <h2 className="my-4">Latest News</h2>
      <Row>
        {newsList && newsList.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.images} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
