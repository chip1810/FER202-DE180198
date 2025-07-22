// pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, updateCart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.brand} {item.model}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateCart(item.id, parseInt(e.target.value))}
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4>Total: ${total.toFixed(2)}</h4>
          <Button variant="success" onClick={() => {
            clearCart();
            navigate('/checkout');
          }}>Checkout</Button>
        </>
      )}
    </div>
  );
}

export default CartPage;
