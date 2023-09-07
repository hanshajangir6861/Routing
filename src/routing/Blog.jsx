/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// https://jsonplaceholder.typicode.com/posts

function Blog() {
    const [posts, setPosts] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    }

    fetchData();
  }, []);
  return <>
    <h1>Blog</h1>
    <div className="posts">
        {
            posts.map((post) => {
                return <div className="post">
                    <h3><Link to={'/blog/' + post.id}>{post.title}</Link></h3>
                    <p>{post.body}</p>
                </div>
            })
        }
    </div>
  </>;
}

export default Blog;
