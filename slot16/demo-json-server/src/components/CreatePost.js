// CreatePost.js
import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setStatus("Vui lòng điền đầy đủ tiêu đề và nội dung.");
      return;
    }

    try {
await axios.post("http://localhost:3001/posts", { title, content });
      navigate("/");
    } catch (err) {
      setStatus("Lỗi khi tạo bài viết.");
      console.error(err);
    }
  };

  return (
    <Container className="my-4">
      <h2>Tạo bài viết mới</h2>
      {status && <Alert variant="warning">{status}</Alert>}
      <Form onSubmit={handleCreate}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nhập tiêu đề..." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" rows={5} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Nhập nội dung..." />
        </Form.Group>
        <Button type="submit" variant="success">Tạo bài viết</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
