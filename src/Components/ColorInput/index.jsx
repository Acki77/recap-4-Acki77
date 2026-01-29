import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleValueChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="color-input-group color-input-wrapper">
      <input
        className="color-input__text"
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleValueChange}
      />

      <input
        className="color-input__picker"
        type="color"
        value={inputValue}
        onChange={handleValueChange}
      />
    </div>
  );
}
