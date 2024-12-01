import React from "react";
import "./Searchbox.css";

export const Searchbox = ({ searchTerm, onChange }) => {
  const [inputValue, setinputValue] = React.useState(searchTerm || "");
  const searchboxRef = React.useRef();

  const handleInputChange = (event) => {
    const val = event.target.value;
    setinputValue(val);
    onChange(val);
  };

  const handleClearClick = () => {
    setinputValue("");
    onChange("");
  };

  return (
    <div className="search-box" ref={searchboxRef}>
      <div className="search-icon">🔍</div>

      <input
        type="text"
        placeholder="Search movies..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="clear-btn" onClick={handleClearClick}>
        Clear
      </button>
    </div>
  );
};
