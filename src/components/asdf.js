import axios from "axios";
import React, { useEffect } from "react";

const Asdf = (props) => {
  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <h1>ree</h1>;
};

export default Asdf;
