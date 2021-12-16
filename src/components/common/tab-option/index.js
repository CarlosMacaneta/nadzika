import React from "react";
import "./tab-option.css";

const tabs = [
  {
    id: 1,
    name: "Encomendas",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "#FCEEC0",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Sobre",
    active_img:
      "https://img.icons8.com/wired/64/3498DB/about.png",
    backdrop: "#E5F3F3",
    inactive_img:
      "https://img.icons8.com/wired/64/000000/about.png",
  },
  {
    id: 3,
    name: "Contactos",
    active_img:
      "https://img.icons8.com/wired/64/3498DB/phone.png",
    backdrop: "#EDf4FF",
    inactive_img:
      "https://img.icons8.com/wired/64/000000/phone.png",
  },
];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="options-wrapper max-width">
        {tabs.map((tab) => (
          <div
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className="tab-image"
                alt={tab.name}
              />
            </div>
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;