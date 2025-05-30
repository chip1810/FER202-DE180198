import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";     // 👈 import trang mới
import Login from "./Login";     // 👈 import trang mới


function App() {
  return (
    <BrowserRouter>
      {/* Navigation đơn giản */}
      <nav style={{ padding: 10 }}>
        <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
        <Link to="/home" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />  {/* 👈 Trang mới */}
        <Route path="/home" element={<Home />} />  {/* 👈 Trang mới */}
        <Route path="/login" element={<Login />} />  {/* 👈 Trang mới */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
