// components/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Image } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Đang tải chi tiết sản phẩm...</p>;

  // Tính % giảm
  const price = parseInt(product.price.replace(/\D/g, ''));
  const current = parseInt(product.currentPrice.replace(/\D/g, ''));
  const discount = Math.round(((price - current) / price) * 100);

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: '100vh', color: 'black' }}
    >
      <h2 className="mb-4 fw-bold">{product.name}</h2>
      <Image
        src={product.image.startsWith('http') ? product.image : process.env.PUBLIC_URL + '/' + product.image}
        rounded
        style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
        className="mb-4"
      />
      <p className="lead">{product.description}</p>
      <p>Price: <del>{product.price} ₫</del></p>
      <p className="fw-bold">Current Price: {product.currentPrice} ₫</p>
      <p className="text-success">Discount: {discount} %</p>

      <div className="mt-3">
        <Button variant="primary" className="me-2" onClick={() => navigate('/')}>Back Home</Button>
        <Button variant="danger" onClick={() => navigate(`/edit/${id}`)}>Edit</Button>
      </div>
    </Container>
  );
};

export default ProductDetail;
