// ProductList.js
import React, { useState } from 'react';

function Radio() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRadioChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    setSelectedProduct(productId);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="radio"
            name="product" // 👈 các radio phải cùng name để chọn 1 cái
            id={`product-${product.id}`}
            value={product.id}
            checked={selectedProduct === product.id}
            onChange={handleRadioChange}
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}

      {selectedProduct && (
        <p>Bạn đã chọn: {products.find(p => p.id === selectedProduct)?.name}</p>
      )}
    </div>
  );
}

export default Radio;
