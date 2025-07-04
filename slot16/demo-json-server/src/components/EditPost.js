// EditPost.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const numericId = isNaN(id) ? id : parseInt(id, 10);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
const res = await axios.get(`http://localhost:3001/posts/${numericId}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        setStatus("Lỗi khi lấy bài viết.");
        console.error(err);
      }
    };
    fetchPost();
  }, [numericId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setStatus("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    try {
await axios.put(`http://localhost:3001/posts/${numericId}`, { title, content });
      navigate("/");
    } catch (err) {
      setStatus("Lỗi khi cập nhật bài viết.");
      console.error(err);
    }
  };

  return (
    <Container className="my-4">
      <h2>Chỉnh sửa bài viết</h2>
      {status && <Alert variant="danger">{status}</Alert>}
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" rows={5} value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary">Cập nhật bài viết</Button>
      </Form>
    </Container>
  );
};

export default EditPost;