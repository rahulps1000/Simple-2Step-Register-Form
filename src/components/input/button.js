import React from "react";

function Button({ children, onClick }) {
  return (
    <div className="button">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
