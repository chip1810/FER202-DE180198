import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.error("Lỗi:", err);
        setPost(null);
      });
  }, [id]);

  if (!post) return <h2>Bài viết không tồn tại</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
