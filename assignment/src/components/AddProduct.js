// components/AddProduct.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { addProductAsync } from '../redux/productSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductAsync(formData)).then(() => navigate('/'));
  };

  return (
    <Container className="mt-4">
      <h2>Thêm sản phẩm</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control name="description" value={formData.description} onChange={handleChange} as="textarea" rows={3} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Giá gốc</Form.Label>
          <Form.Control name="price" value={formData.price} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Giá khuyến mãi</Form.Label>
          <Form.Control name="currentPrice" value={formData.currentPrice} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Đường dẫn ảnh</Form.Label>
          <Form.Control name="image" value={formData.image} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="success">Thêm sản phẩm</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
