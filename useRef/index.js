import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

// import App from "./App";

const App = () => {
  const potato = useRef();
  setTimeout(() => {
    potato.current.focus();
  }, 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
