// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} /> {/* Trang đăng nhập */}
          <Route path="/posts" element={<Post />} />        {/* Danh sách bài viết */}
          <Route path="/post/:id" element={<PostDetail />} /> {/* Chi tiết bài viết */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
