// src/components/LoginForm.js
import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (!email || !password) {
      setErrorMsg("Vui lòng điền đầy đủ email và mật khẩu!");
      return;
    }

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Email không hợp lệ!");
      return;
    }

    // Giả lập thông tin đúng
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/posts"); // chuyển tới trang danh sách bài viết
    } else {
      setErrorMsg("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <Container>
      <h2>Đăng nhập</h2>
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
