import "./App.css";
import LoginButton from "./components/buttons/login";
import axios from "axios";

import PostList from "./components/postList";
import { __API__ } from "./utilities/constants";
import { getCookie } from "./utilities/functions";
import { useEffect, useState } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const cookie = getCookie("accessToken");
    axios
      .get(__API__ + "/login/status", {
        headers: { Authorization: `Bearer ${cookie}` },
      })
      .then(() => {
        setLoginStatus(true);
        setAccessToken(cookie);
      })
      .catch(() => {
        setLoginStatus(false);
      });
  }, []);

  return (
    <div>
      <h1>loginStatus: {loginStatus ? "true" : "false"}</h1>
      {loginStatus ? (
        <div>
          <PostList accessToken={accessToken}></PostList>
        </div>
      ) : (
        <div>
          <LoginButton url={__API__ + "/login"}></LoginButton>
        </div>
      )}
    </div>
  );
}

export default App;
