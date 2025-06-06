// src/SimpleWebsite.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function SimpleWebsite() {
  return (
    <div>
      {/* Header */}
      <Navbar bg="warning" className="justify-content-center py-4">
        <Navbar.Brand>
          <img
             src="/images/logofpt.jpg"

            alt="FPT Logo"
            width="200"
          />
        </Navbar.Brand>
      </Navbar>

      {/* Navigation */}
      <Nav className="justify-content-center bg-light py-2">
        <Nav.Item><Nav.Link href="#">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#">Contact</Nav.Link></Nav.Item>
      </Nav>

      {/* Main Content */}
      <Container className="text-center my-4">
        <h3>About</h3>
        <p>This is the about section of the website.</p>

        <h3>Contact</h3>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </Container>

      {/* Footer */}
      <footer className="text-center bg-warning py-3">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default SimpleWebsite;
