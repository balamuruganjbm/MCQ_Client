import React from "react";
export default function RadioButton({ name, value, label, handleChange }) {
  const handleClick = e => {
    handleChange(e.target.value);
  };
  return (
    <p>
      <label>
        <input
          onChange={handleClick}
          className="with-gap "
          name={name}
          value={value}
          type="radio"
        />
        <span>{label}</span>
      </label>
    </p>
  );
}
