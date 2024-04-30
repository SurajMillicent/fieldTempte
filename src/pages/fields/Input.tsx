// Input.jsx
import React, { InputHTMLAttributes } from "react";
import "./_Input.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<FormInputProps> = ({ label, ...rest }) => {
  return (
    <div className="form-input">
      <input id={label} placeholder={label} {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Input;
