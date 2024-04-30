// DatePicker.tsx

import React, { useState } from "react";
import "./_datepicker.scss";

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
  };

  return (
    <div className="date-picker">
      <input
        type="date"
        value={selectedDate ? selectedDate.toISOString().substr(0, 10) : ""}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
