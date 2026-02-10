// Search input component
// User enters flight number here

import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [flightNumber, setFlightNumber] = useState("");

// Runs search when button clicked  
  const handleSearchClick = () => {
    const trimmed = flightNumber.trim();
    if (!trimmed) return;

// Call parent callback
    onSearch(trimmed);
    setFlightNumber("");
  };

// Runs search when Enter key pressed
  const handlekeyDown = (e) => {
    if (e.key === "Enter") {
        handleSearchClick();
    }
  };

// Input field and button layout 
  return (
    <div className="row">
      <input
        type="text"
        placeholder="Enter flight number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        onKeyDown={handlekeyDown}
      />

      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}