import React from "react";

function CheckBox() {
  return (
    <div>
      <div className="mb-10">
        <div className="form-check form-check-custom form-check-solid">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </div>

      <div className="mb-10">
        <div className="form-check form-check-custom form-check-solid">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked="checked"
          />
          <label className="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
