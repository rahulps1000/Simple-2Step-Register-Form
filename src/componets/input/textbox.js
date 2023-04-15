import React from "react";

function TextBox({
  type = "text",
  placeholder = "",
  required = false,
  errorText = "",
  ref = null,
}) {
  return (
    <div className="textbox">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        ref={ref}
      />
      {errorText && <span>{errorText}</span>}
    </div>
  );
}

export default TextBox;
