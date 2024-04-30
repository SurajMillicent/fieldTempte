import React from "react";
import "./_sideBar.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {" "}
      {/* Updated class name */}
      <div className="text-white p-4 text-xl font-bold">Fields</div>
      <div className="flex flex-row">
        <div>
          <ul className="list">
            {" "}
            {/* Updated class name */}
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/input">Input</a>
            </li>
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/text-area">Text Area</a>
            </li>
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/select">Select</a>
            </li>
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/multi-select">Multi Select</a>
            </li>
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/date-picker">Date Picker</a>
            </li>
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/radio">radio button</a>
            </li>
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/check-box">check box</a>
            </li>
            <li className="item">
              {" "}
              {/* Updated class name */}
              <a href="/multi-select">upload image</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
