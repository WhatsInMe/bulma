import axios from "axios";
import React, { useEffect, useState } from "react";

import { __API__ } from "../utilities/constants";
import { getCookie } from "../utilities/functions";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(__API__ + "/posts", {
        // headers: { Authorization: `Bearer ${props.accessToken}` },
        headers: { Authorization: `Bearer test1` },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {posts.length ? (
        <div>
          <ul>
            {posts.map((post) => (
              <li>
                id: {post.id} title: {post.title} text: {post.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1>no posts</h1>
        </div>
      )}
    </div>
  );
};

export default PostList;
