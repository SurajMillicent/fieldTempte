// Navigate.jsx

import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../component/sideBar/SideBar";
import Input from "../pages/fields/Input";
import TextArea from "../pages/fields/TextArea";
import MultiSelect from "../pages/fields/MultiSelect";

import "./_navigate.scss"; // Import SCSS file
import DatePicker from "../pages/fields/DatePicker";
import Select1 from "../pages/fields/Select";
import Radio from "../pages/fields/Radio";
import CheckBox from "../pages/fields/CheckBox";

const Navigate = () => {
  const navigate = useNavigate();

  navigate("/input");

  return (
    <div className="flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/input" element={<Input label={"Name"} />} />
          <Route path="/text-area" element={<TextArea />} />
          <Route path="/select" element={<Select1 />} />
          <Route path="/multi-select" element={<MultiSelect />} />
          <Route path="/date-picker" element={<DatePicker />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/check-box" element={<CheckBox />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navigate;
