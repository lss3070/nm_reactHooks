import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

// import App from "./App";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    //componentMout로 호출된 경우
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //function을 반환받았다면 componentWillUnMount로 호출된 경우
    return () => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
const App = () => {
  const sayHello = () => console.log("say hello");

  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
