import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = () => {
  const element = useRef();

  const triggerFull = (callback) => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = (callback) => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };

  return { element, triggerFull, exitFull };
};
const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We ar full" : "We ar not small");
  };
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wikipedia_screenshot_on_Nexus_9_20141121.jpg/440px-Wikipedia_screenshot_on_Nexus_9_20141121.jpg" />
        <button onClick={exitFull}>Exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
