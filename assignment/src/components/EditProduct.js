// components/EditProduct.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/products/${id}`, formData);
      navigate(`/detail/${id}`);
    } catch (error) {
      console.error('Lỗi khi cập nhật:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Cập nhật sản phẩm</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control name="description" value={formData.description} onChange={handleChange} required as="textarea" rows={3} />
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
          <Form.Label>Link ảnh</Form.Label>
          <Form.Control name="image" value={formData.image} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="success">Lưu thay đổi</Button>{' '}
        <Button variant="secondary" onClick={() => navigate(`/detail/${id}`)}>Hủy</Button>
      </Form>
    </Container>
  );
};

export default EditProduct;