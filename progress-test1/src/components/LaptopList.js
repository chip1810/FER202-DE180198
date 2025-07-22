import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AddLaptopForm from './AddLaptopForm';
import LaptopCarousel from './LaptopCarousel';
import AddToCartButton from './AddToCartButton';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/Laptops')
      .then(res => {
        setLaptops(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleLaptopAdded = (newLaptop) => {
    setLaptops(prev => [...prev, newLaptop]);
    setFiltered(prev => [...prev, newLaptop]);
  };

  const handleSearch = () => {
    if (search.trim() === '') {
      setFiltered(laptops);
      return;
    }
    const result = laptops.filter(lap =>
      lap.brand.toLowerCase().includes(search.toLowerCase()) ||
      lap.model.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <>
      <h3 className="text-center my-4">Laptop List</h3>

      <AddLaptopForm onLaptopAdded={handleLaptopAdded} />
      <LaptopCarousel />

      <Form className="mb-4">
        <Row className="g-2">
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Search by brand or model"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs={3}>
            <Button className="w-100" onClick={handleSearch}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filtered.map((laptop) => (
          <Col key={laptop.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={laptop.image}
                alt={laptop.model}
                style={{ objectFit: 'cover', height: '180px' }}
              />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year} <br />
                  <strong>Price:</strong> {laptop.price}
                </Card.Text>
                
                <AddToCartButton laptop={laptop} />
                <Button
                  variant="info"
                  className="ms-2"
                  onClick={() => navigate(`/laptops/${laptop.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default LaptopList;
