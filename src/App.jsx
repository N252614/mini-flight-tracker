// Main component of the application
// Handles search logic and state

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchFlightMock } from "./services/mockFlightApi";
import FlightCard from "./components/FlightCard";
import { fetchFlightByNumber } from "./services/aviationstack";
import "./App.css";

export default function App() {
// Stores the last searched flight number (for UI display)
  const [lastSearch, setLastSearch] = useState("");
  const [flightData, setFlightData] = useState(null);

// Basic UI states for async request
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_AVIATIONSTACK_KEY;

// Function to search flight by number
  const handleSearch = async (flightNumber) => {
    setLastSearch(flightNumber);
    
// Reset UI state before new request
  setError("");
  setFlightData(null);
  setLoading(true);

  try {
// If we don't have an API key yet, use mock data
    let data;

    if (!API_KEY || API_KEY.trim() === "") {
      data = await fetchFlightMock(flightNumber);
    } else {
      data = await fetchFlightByNumber(flightNumber)
    }
    await new Promise(res => setTimeout(res, 1000));

    setFlightData(data);
  } catch (err) {
    setError(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

// UI layout of the page
  return (
  <div className="app">
    <div className="container">
      <h1 className="title">✈ Mini Flight Tracker</h1>
      <p className="subtitle">Enter a flight number to get flight status.</p>

      <SearchBar onSearch={handleSearch} />

      {lastSearch && <p className="lastSearch">Last search: {lastSearch}</p>}
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error-box">{error}</p>}

      {flightData && <FlightCard data={flightData} />}
    </div>
  </div>
);
}