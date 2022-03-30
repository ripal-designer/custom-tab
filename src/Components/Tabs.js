import React from "react";
import { TabContent } from "./TabContent";
import { useState } from "react";

function Tabs(props) {
  const [activeTab, setActiveTab] = useState("1");
  const [currentTab, setCurrentTab] = useState(TabContent[0]);

  function handlerClick(itemId) {
    setActiveTab(itemId);
    const currentTabContent = TabContent.filter((item) => item.id === itemId);
    setCurrentTab(currentTabContent[0]);
  }
  console.log(activeTab);

  return (
    <div>
      <h1 className="text-center">Custom Tabs</h1>
      <div className="tabs">
        {TabContent.map((item) => {
          return (
            <button
              key={item.id}
              id={item.id}
              onClick={() => handlerClick(item.id)}
              className={`tab primary-btn
          ${activeTab === item.id ? "activetab": ''} `}
            >
              {item.heading}

              {console.log(item.id)}
            </button>
          );
        })}
      </div>
      <div className="tab-content"> {currentTab.content}</div>
    </div>
  );
}

export default Tabs;
