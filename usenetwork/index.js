import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went onlin" : "We just went offline");
  };
  const onLine = useNetwork();

  return (
    <div>
      <h1> {onLine ? "OnLine" : "offLine"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
