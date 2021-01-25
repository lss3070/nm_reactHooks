import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnvalue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeonload", listener);
  const disenablePrevent = () => window.removeEventListener("beforeunload");
  return { enablePrevent, disenablePrevent };
};
const App = () => {
  const { enablePrevent, disenablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disenablePrevent}>Protect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
