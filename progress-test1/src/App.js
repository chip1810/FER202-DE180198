import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LaptopManagementPage from './pages/LaptopManagementPage';
import LaptopDetailPage from './pages/LaptopDetailPage';
import CartPage from './pages/CartPage'; // Thêm dòng này
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/laptops" element={<LaptopManagementPage user={user} />} />
          <Route path="/laptops/:id" element={<LaptopDetailPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* Thêm dòng này */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App