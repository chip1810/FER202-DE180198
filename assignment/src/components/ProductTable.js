// components/ProductTable.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProductAsync } from '../redux/productSlice';
import { useState } from 'react';

const ProductTable = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector(state => state.products);
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    if (status === 'loading') return <p className="text-center">Đang tải dữ liệu...</p>;
    if (status === 'failed') return <p className="text-danger">Lỗi: {error}</p>;

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Product List</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Current Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((product, index) => (
                        <tr key={product.id}>
                            <td className="text-center">{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price} đ</td>
                            <td>{product.currentPrice} đ</td>
                            <td className="text-center">
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(product.id)}
                                    className="me-2"
                                >
                                    Delete
                                </Button>
                                <Link to={`/edit/${product.id}`} className="btn btn-sm btn-warning">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
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

export default ProductTable;
