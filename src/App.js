import "./App.css";
import { useEffect, useState } from "react";
import { __API__ } from "./utilities/constants";
import LoginButton from "./components/buttons/login";
import axios from "axios";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [secretMessage, setSecretMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [posts, setPosts] = useState([]);

  const getCookie = (name) => {
    const cookie = document.cookie;
    if (!cookie) {
      return "";
    }
    const pair = cookie.split("; ").find((e) => e.split("=")[0] === name);
    if (pair) {
      return pair.split("=")[1];
    }
    return "";
  };

  useEffect(() => {
    setAccessToken(getCookie("accessToken"));
    setSecretMessage(getCookie("secretMessage"));

    axios
      .get(__API__ + "/login/status", {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.status);
        setLoginStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setLoginStatus(false);
      });
  }, []);

  return (
    <div>
      <LoginButton url={__API__ + "/login"}></LoginButton>
      <h1>accessToken: {accessToken || "empty"}</h1>
      <h1>secretMessage: {secretMessage || "empty"}</h1>
      <h1>loginStatus: {loginStatus ? "true" : "false"}</h1>
    </div>
  );
}

export default App;
