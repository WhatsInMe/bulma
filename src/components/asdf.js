import axios from "axios";
import React, { useEffect } from "react";

import { __API__ } from "../utilities/constants";
import { getCookie } from "../utilities/functions";

const Asdf = (props) => {
  useEffect(() => {
    // axios.get("http://localhost:3001/").then((res) => {
    //   console.log(res.data);
    // });

    axios
      .get(__API__ + "/posts", {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
          //   Authorization: `Bearer test1`,
        },
      })
      .then((res) => {
        console.log("yes");
        console.log(res.data);
      })
      .catch(() => {
        console.log("no");
      });
  }, []);

  return <h1>test component</h1>;
};

export default Asdf;
