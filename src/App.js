import "./App.css";
import { useEffect, useState } from "react";
import { __API__ } from "./utilities/constants";
import LoginButton from "./components/buttons/login";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [secretMessage, setSecretMessage] = useState("");
  const [posts, setPosts] = useState([]);

  const getCookieName = (name, cookie) => {
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
    setAccessToken(getCookieName("accessToken", document.cookie));
    setSecretMessage(getCookieName("secretMessage", document.cookie));
  }, []);

  return (
    <div>
      <LoginButton url={__API__ + "/login"}></LoginButton>
      <h1>accessToken: {accessToken || "empty"}</h1>
      <h1>secretMessage: {secretMessage || "empty"}</h1>
    </div>
  );
}

export default App;
