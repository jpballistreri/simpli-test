import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post/Post";
import { useNavigate } from "react-router-dom";

function PostView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [loged, setLoged] = useState(false);

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
        if (res.message === "Unauthorized") {
          console.log("NO AUTO");
          navigate("/");
        }

        setPost(res);
        setLoading(false);
        setLoged(true);
      });
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (loged === true) {
    return (
      <div>
        <h3>
          Inicio {">"} Auto {">"} {post.post_vehicles[0].vehicle.title}
        </h3>
        <Post post={post} />
      </div>
    );
  }
}

export default PostView;
