import "./App.css";
import { useEffect, useState } from "react";
import { __API__ } from "./utilities/constants";
import LoginButton from "./components/buttons/login";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setAccessToken(document.cookie.split("=")[1] || "");
  },[]);
  return (
    <div>
      <LoginButton url={__API__ + "/login"}></LoginButton>
      <h1>accessToken: {accessToken || "none"}</h1>
    </div>
  );
}

export default App;
