import React, { useState, useEffect } from "react";

const Button = (props) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign(props.url);
    }
  });

  return <button onClick={() => setClicked(true)}>LOGIN</button>;
};

export default Button;
