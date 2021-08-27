import axios from "axios";
import React, { useEffect, useState } from "react";

import { __API__ } from "../utilities/constants";
import { getCookie } from "../utilities/functions";

const Asdf = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(__API__ + "/posts", {
        headers: {
          //   Authorization: `Bearer ${getCookie("accessToken")}`,
          Authorization: `Bearer test1`,
        },
      })
      .then((res) => {
        console.log("yes");
        console.log(res.data);
        setPosts(res.data);
      })
      .catch(() => {
        console.log("no");
      });
  }, []);

  return (
    <div>
      {posts.length ? (
        <div>
          <h1>something</h1>
        </div>
      ) : (
        <div>
          <h1>nothing</h1>
        </div>
      )}
    </div>
  );
};

export default Asdf;
