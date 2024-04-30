import React, { useState } from "react";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

const MultiSelect: React.FC = () => {
  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options here
  ];

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleChange = (selected: any) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <label htmlFor="multi-select">Select multiple options:</label>
      <Select
        id="multi-select"
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
      />
    </div>
  );
};

export default MultiSelect;
