import React from 'react';
import LaptopList from '../components/LaptopList';

function LaptopManagementPage({ user }) {
  return (
    <div className="container mt-5">
      <h2>Laptop Management</h2>
      {user ? (
        <LaptopList />
      ) : (
        <p>Please login to view the laptop list.</p>
      )}
    </div>
  );
}

export default LaptopManagementPage;
