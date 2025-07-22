import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Button, Spinner } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';

function AddToCartButton({ laptop }) {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (laptop.quantity <= 0) return;

    try {
      setLoading(true);
      // Trừ quantity trong db.json
      await axios.patch(`http://localhost:3001/Laptops/${laptop.id}`, {
        quantity: laptop.quantity - 1
      });

      // Cập nhật vào cart context
      addToCart({ ...laptop, quantity: 1 });

    } catch (err) {
      console.error('Error adding to cart:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={laptop.quantity === 0 ? 'secondary' : 'success'}
      disabled={laptop.quantity === 0 || loading}
      onClick={handleAdd}
    >
      {loading ? (
        <Spinner animation="border" size="sm" />
      ) : laptop.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
    </Button>
  );
}

export default AddToCartButton;
