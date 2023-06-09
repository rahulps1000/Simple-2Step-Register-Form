import React from "react";
import { useState } from "react";

function SelectBox({
  children,
  onChange = (e) => {},
  value,
  placeholder,
  errorText,
}) {
  const [state, setState] = useState(value);
  const _onChange = (e) => {
    onChange(e);
    setState(e.target.value);
  };
  return (
    <div className="selectbox">
      <select value={state} onChange={_onChange}>
        {placeholder && (
          <option value="" disabled selected style={{ color: "gray" }}>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {errorText && <span>{errorText}</span>}
    </div>
  );
}

export default SelectBox;
