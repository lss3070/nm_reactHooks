import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// import App from "./App";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
const App = () => {
  const { currentItem, changeItem } = useTabs(1, content);
  return (
    <div>
      {content.map((e, i) => (
        <button onClick={() => changeItem(i)}>{e.tab}</button>
      ))}
      {currentItem.content}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
