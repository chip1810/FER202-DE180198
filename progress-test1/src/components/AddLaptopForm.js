import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

function AddLaptopForm({ onLaptopAdded }) {
  const [form, setForm] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    image: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation basic
    if (!form.brand || !form.model || !form.year || !form.price || !form.image) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/Laptops', form);
      setSuccess('Laptop added successfully!');
      onLaptopAdded(res.data); // notify parent to update list
      setForm({
        brand: '',
        model: '',
        year: '',
        price: '',
        image: '',
      });
    } catch (err) {
      console.error(err);
      setError('Failed to add laptop. Try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <h4 className="mb-3">Add New Laptop</h4>

      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-2">
        <Form.Label>Brand</Form.Label>
        <Form.Control name="brand" value={form.brand} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Model</Form.Label>
        <Form.Control name="model" value={form.model} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Year</Form.Label>
        <Form.Control name="year" value={form.year} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" value={form.price} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control name="image" value={form.image} onChange={handleChange} />
      </Form.Group>

      <Button type="submit">Add Laptop</Button>
    </Form>
  );
}

export default AddLaptopForm;
