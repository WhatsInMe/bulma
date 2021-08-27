import "./App.css";
import LoginButton from "./components/buttons/login";
import axios from "axios";

import Asdf from "./components/asdf";
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
      .then(() => {
        setLoginStatus(true);
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
          <Asdf></Asdf>
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
