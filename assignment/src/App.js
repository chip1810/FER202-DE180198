
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/productSlice';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import ProductTable from './components/ProductTable'; // thêm dòng này
import { Link } from 'react-router-dom';

import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Gọi API lúc khởi động app
  }, [dispatch]);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">PhoneStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
            <Nav.Link as={Link} to="/table">Danh sách</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/table" element={<ProductTable />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </Container>
    </Router>
  );
}

export default App;
