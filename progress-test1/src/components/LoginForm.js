import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button, Form, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setUser }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // clear lỗi khi người dùng nhập lại
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3001/UserAccounts?username=${form.username}&password=${form.password}`);
      if (res.data.length > 0) {
        setUser(res.data[0]);
        setShowModal(true);
      } else {
        setError('Invalid username or password!');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="p-4 shadow rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Login</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={form.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">Login</Button>

          {error && (
            <Alert variant="danger" className="mt-3 mb-0 text-center">
              {error}
            </Alert>
          )}
        </Form>
      </Card>

      {/* Modal welcome */}
      <Modal show={showModal} onHide={() => {
        setShowModal(false);
        navigate('/laptops');
      }}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome, {form.username}! Login Successful!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowModal(false);
            navigate('/laptops');
          }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
