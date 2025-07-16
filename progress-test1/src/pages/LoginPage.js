import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage({ setUser }) {
  return (
    <div className="container mt-5">
      
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default LoginPage;
