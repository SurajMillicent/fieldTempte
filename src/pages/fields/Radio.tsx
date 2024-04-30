import React from "react";

function Radio() {
  return (
    <div>
      <div className="mb-10">
        <div className="form-check form-check-custom form-check-solid">
          <input
            className="form-check-input"
            type="radio"
            value=""
            id="flexRadioChecked"
            checked="checked"
          />
          <label className="form-check-label" for="flexRadioChecked">
            Checked radio
          </label>
        </div>
      </div>
      <div className="mb-10">
        <div className="form-check form-check-custom form-check-solid">
          <input
            className="form-check-input"
            type="radio"
            value=""
            disabled
            id="flexRadioDisabled"
          />
          <label className="form-check-label" for="flexRadioDisabled">
            Disabled radio
          </label>
        </div>
      </div>
    </div>
  );
}

export default Radio;
