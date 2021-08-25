import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { __API__ } from "./utilities/constants";
import LoginButton from "./components/buttons/login";

function App() {
  return (
    <div>
      <h1>Login:</h1>
      <LoginButton url={__API__ + "/login"}></LoginButton>
      {/* <LoginButton url="/login"></LoginButton> */}
    </div>
  );
}

export default App;
