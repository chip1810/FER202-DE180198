// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LaptopManagementPage from './pages/LaptopManagementPage';
import LaptopDetailPage from './pages/LaptopDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/laptops" element={<LaptopManagementPage user={user} />} />
        <Route path="/laptops/:id" element={<LaptopDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
