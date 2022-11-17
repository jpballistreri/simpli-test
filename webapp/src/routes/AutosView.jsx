import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post/Post";

function AutosView() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost();
  }, [id]);

  function getPost() {
    fetch(`http://localhost:3002/api/dealer/1/posts/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPost(res);
        setLoading(false);
      });
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <Post post={post} />
    </div>
  );
}

export default AutosView;
