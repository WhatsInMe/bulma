import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { __API__ } from "./utilities/constants";

function App() {
  useEffect(() => {
    axios.get(__API__ + "/accounts").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div>sup</div>;
}

export default App;
