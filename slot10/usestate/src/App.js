// App.js
import React from 'react';
import Counter from './components/Counter';
import UserInfo from './components/UserInfo';
import ProductList from './components/ProductList';
import Radio from './components/Radio';


function App() {
  return (
    <div>
      <h2>Counter</h2>
      <Counter />

      <h2>User Info</h2>
      <UserInfo />

      <h2>Product List</h2>
      <ProductList />

      <h2>Radio</h2>
      <Radio />
    </div>
  );
}

export default App;
