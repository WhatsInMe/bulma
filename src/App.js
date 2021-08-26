import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { __API__ } from "./utilities/constants";
import LoginButton from "./components/buttons/login";

function App() {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    setAccessToken(document.cookie.split("=")[1] || "");
  });
  return (
    <div>
      <h1>accessToken: {accessToken || "none"}</h1>
      <LoginButton url={__API__ + "/login"}></LoginButton>
    </div>
  );
}

export default App;
