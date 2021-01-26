import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotifi = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotifi;
};
const App = () => {
  const triggerNotif = useEffect("kimchi");
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
