import "./App.css";
import LoginButton from "./components/buttons/login";
import axios from "axios";
import { __API__ } from "./utilities/constants";
import { getCookie } from "./utilities/functions";
import { useEffect, useState } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    axios
      .get(__API__ + "/login/status", {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        setLoginStatus(true);
      })
      .catch((err) => {
        setLoginStatus(false);
      });
  }, []);

  return (
    <div>
      <LoginButton url={__API__ + "/login"}></LoginButton>
      <h1>loginStatus: {loginStatus ? "true" : "false"}</h1>
    </div>
  );
}

export default App;
