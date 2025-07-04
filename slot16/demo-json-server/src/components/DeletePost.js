// DeletePost.js
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = isNaN(id) ? id : parseInt(id, 10);

  const handleDelete = async () => {
    if (!window.confirm("Bạn có chắc muốn xóa bài viết này?")) return;

    try {
await axios.delete(`http://localhost:3001/posts/${numericId}`);
      navigate("/");
    } catch (err) {
      alert("Lỗi khi xóa bài viết.");
      console.error(err);
    }
  };

  return (
    <Container className="my-4">
      <h2>Xóa bài viết</h2>
      <p>Bạn có chắc muốn xóa bài viết này không?</p>
      <Button variant="danger" onClick={handleDelete} className="me-2">
        Xóa
      </Button>
      <Button variant="secondary" onClick={() => navigate("/")}>Hủy</Button>
    </Container>
  );
};

export default DeletePost;
