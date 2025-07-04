// App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = lazy(() => import("./components/Login"));
const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;