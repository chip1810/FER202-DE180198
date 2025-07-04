// PostList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Container, Spinner, Row, Col } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios.get("http://localhost:3001/posts")
    .then((res) => {
      setData(res.data);
      setLoading(false);
    })
    .catch(err => console.error(err));
}, []);


  if (loading) return <Spinner animation="border" className="m-5" />;

  return (
    <Container className="my-4">
      <h2>Danh sách bài viết</h2>
      <Link to="/create">
        <Button variant="primary" className="mb-3">Tạo bài viết mới</Button>
      </Link>
      <Row>
        {data.map(post => (
          <Col key={post.id} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Link to={`/edit/${post.id}`}>
                  <Button variant="warning" size="sm" className="me-2">Chỉnh sửa</Button>
                </Link>
                <Link to={`/delete/${post.id}`}>
                  <Button variant="danger" size="sm">Xóa</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;