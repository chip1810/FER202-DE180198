// components/ProductList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Col, Container, Row, Spinner, Modal } from 'react-bootstrap';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import {
    fetchProducts,
    deleteProductAsync
} from '../redux/productSlice';




const ProductList = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector((state) => state.products);
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };


    if (status === 'loading') return <Spinner animation="border" className="d-block mx-auto" />;
    if (status === 'failed') return <p className="text-danger text-center">Lỗi: {error}</p>;

    return (
        <Container className="mt-4">
            <Row className="mb-3">
                <Col><h2>Danh sách điện thoại</h2></Col>
                <Col className="text-end">
                    <Link to="/add" className="btn btn-success">+ Thêm điện thoại</Link>
                </Col>
            </Row>
            <Row>
                {list.map(product => (
                    <Col md={4} key={product.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} height="240" style={{ objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text className="text-muted small">{product.description.slice(0, 80)}...</Card.Text>
                                <p className="mb-1"><s>{product.price}</s></p>
                                <p className="fw-bold text-danger">{product.currentPrice}</p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/detail/${product.id}`} className="btn btn-primary btn-sm">Xem</Link>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Xóa</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa sản phẩm này không?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Hủy
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            dispatch(deleteProductAsync(selectedId));
                            setShowModal(false);
                        }}
                    >
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>

    );
};

export default ProductList;
