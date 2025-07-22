import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h1 className="display-4 text-danger">404 - Not Found</h1>
      <p className="lead">The page you're looking for doesn't exist.</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Go Back to Home
      </Button>
    </div>
  );
}

export default NotFoundPage;
