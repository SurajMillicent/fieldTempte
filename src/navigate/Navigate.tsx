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
        <samp>
          {` <div className="form-input">
            <input id={label} placeholder={label} {...rest} />
            <label htmlFor={label}>{label}</label>
          </div> <div className="form-input">
          <input id={label} placeholder={label} {...rest} />
          <label htmlFor={label}>{label}</label>
        </div>`}
        </samp>
        <hr></hr>
        <pre style={{backgroundColor:"beige"}}>
          {`
          <div className="form-input">
            <input id={label} placeholder={label} {...rest} />
            <label htmlFor={label}>{label}</label>
          </div> 
          <div className="form-input">
             textarea:focus ~ .floating-label,
          textarea:not(:placeholder-shown) ~ .floating-label,
          input:not(:focus):valid ~ .floating-label {
              // padding: 12px;
              color: #888 !important;
              top: 0px;
              left: 10px;
              transform: translateY(-50%);
              transition: 0.1s;
              padding: 4px;
              letter-spacing: 0.25px !important;
              font-size: 10px;
              opacity: 1;
              background: linear-gradient(180deg, rgba(255, 255, 255, 1) 60%, rgba(247, 247, 247, 0) 40%);
              }

          `}
        </pre>
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
