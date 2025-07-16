import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Container, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LaptopDetail() {
    const { id } = useParams();
    const [laptop, setLaptop] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/Laptops/${id}`)
            .then(res => {
                if (res.data) {
                    setLaptop(res.data);
                } else {
                    setNotFound(true);
                }
            })
            .catch(() => setNotFound(true));
    }, [id]);

    if (notFound) {
        return <h3 className="text-center text-danger mt-5">404 Not Found: Laptop with id {id} does not exist.</h3>;
    }

    if (!laptop) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card className="shadow rounded" style={{ maxWidth: '600px', width: '100%' }}>
                <Card.Img
                    variant="top"
                    src={laptop.image}
                    alt={laptop.model}
                    style={{ objectFit: 'cover', height: '300px' }}
                />
                <Card.Body>
                    <Card.Title className="text-center fs-4">{laptop.brand} - {laptop.model}</Card.Title>
                    <Card.Text className="mt-3">
                        <strong>Year:</strong> {laptop.year} <br />
                        <strong>Price:</strong> {laptop.price} <br />
                        <strong>Description:</strong> This is a high-quality laptop with excellent performance, stylish design, and durable build. Perfect for both work and entertainment.
                    </Card.Text>

                    <Button
                        variant="primary"
                        className="mt-3 w-100"
                        onClick={() => navigate('/laptops')}
                    >
                        ← Back to Laptop List
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default LaptopDetail;
