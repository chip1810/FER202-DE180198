import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts") // 👈 Gọi đúng API
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Lỗi khi tải bài viết:", err));
  }, []);

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
