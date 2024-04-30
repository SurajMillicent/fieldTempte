// import React, { useState } from "react";

// interface Option {
//   value: string | number;
//   label: string;
// }

// const Select: React.FC = () => {
//   const [selectedValue, setSelectedValue] = useState<string | number>(
//     "option1"
//   );

//   const options: Option[] = [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//     { value: "option3", label: "Option 3" },
//   ];

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = event.target.value;
//     setSelectedValue(value);
//   };

//   return (
//     <select value={selectedValue} onChange={handleChange}>
//       {options.map((option, index) => (
//         <option key={index} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default Select;

import { FC } from "react";
import Select from "react-select";

const Select1: FC = () => {
  const options = [
    { value: "option 1", label: "Option 1" },
    { value: "option 2", label: "Option 2" },
    { value: "option 3", label: "Option 3" },
    { value: "option 4", label: "Option 4" },
    { value: "option 5", label: "Option 5" },
  ];

  return (
    <>
      <div className="">
        <label className="form-label">Default input style</label>
        <Select
          className="react-select-styled"
          classNamePrefix="react-select"
          options={options}
          placeholder="Select an option"
        />
      </div>
    </>
  );
};

export default Select1;
