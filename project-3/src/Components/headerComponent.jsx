/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/header.css";
function Header({ search }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    search(inputValue);
  };
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <label>What are you looking for?</label>
        <input
          type="text"
          value={inputValue}
          placeholder="Search..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Header;
