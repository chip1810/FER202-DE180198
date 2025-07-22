import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div>© {new Date().getFullYear()} Laptop Shop. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
