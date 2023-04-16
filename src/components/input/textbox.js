import React from "react";

function TextBox({
  type = "text",
  placeholder = "",
  required = false,
  errorText = "",
  ref = null,
  onChange = (e) => {},
  value,
}) {
  return (
    <div className="textbox">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        ref={ref}
        onChange={onChange}
        defaultValue={value}
      />
      {errorText && <span>{errorText}</span>}
    </div>
  );
}

export default TextBox;
