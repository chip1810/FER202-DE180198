// src/pages/Home.js
import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
    const thumbnails = [
        'images/thumb1.jpg',
        'images/thumb2.jpg',
        'images/thumb3.jpg',
        'images/thumb4.jpg',
        'images/thumb5.jpg',
        'images/thumb6.jpg',
    ];

    const banners = [
        'images/banner1.jpg',
        'images/banner2.jpg',
        'images/banner3.avif',
    ];

    return (
        <Container className="my-4">
            {/* Carousel 3 ảnh banner */}
            <Carousel>
                {banners.map((img, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt={`Banner ${idx + 1}`}
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Ảnh tròn bên dưới */}
            <Row className="justify-content-center mt-4">
                {thumbnails.map((src, idx) => (
                    <Col key={idx} xs={4} sm={2} className="text-center mb-3">
                        <Image
                            src={src}
                            alt={`thumb-${idx}`}
                            roundedCircle
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                    </Col>
                ))}
            </Row>

            {/* Tiêu đề */}
            <h2 className="text-danger text-center">This is Home Page</h2>
        </Container>
    );
}

export default Home;
