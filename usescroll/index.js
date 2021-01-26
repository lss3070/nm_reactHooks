import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    console.log("!s");
    setState({ y: window.scrollY, x: window.scrollX });
    console.log("Y:", window.scrollY);
  };
  useEffect(() => {
    console.log("!!");
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App">
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hi~
      </h1>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
