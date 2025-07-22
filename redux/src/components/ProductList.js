import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/cartSlice';

const product = {
  id: '123456',
  name: 'Example Product',
  price: 9.99,
  description: 'This is an example product.',
  catalogs: ['catalog1', 'catalog2'],
};

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Catalogs: {product.catalogs.join(', ')}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button
        onClick={() =>
          dispatch(updateCart({ ...product, name: 'Updated Product' }))
        }
      >
        Update to Cart
      </button>
      <button onClick={() => dispatch(deleteFromCart(product.id))}>
        Delete from Cart
      </button>
    </div>
  );
};

export default ProductList;
