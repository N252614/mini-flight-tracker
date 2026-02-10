// Import tools for testing
import { render, screen, fireEvent } from "@testing-library/react";
// Import component to test
import SearchBar from "../src/components/SearchBar";

test("calls onSearch with trimmed value and clears input", () => {
// Create fake function to track calls
  const onSearch = vi.fn();

// Render component
  render(<SearchBar onSearch={onSearch} />);

// Find input and button
  const input = screen.getByPlaceholderText(/enter flight number/i);
  const button = screen.getByRole("button", { name: /search/i });

// Type value with spaces
  fireEvent.change(input, { target: { value: "  AA101  " } });

// Click search button
  fireEvent.click(button);

// Check that function was called without spaces
  expect(onSearch).toHaveBeenCalledWith("AA101");

// Check that input is cleared
  expect(input).toHaveValue("");
});

test("pressing Enter runs search", () => {
  const onSearch = vi.fn();

  render(<SearchBar onSearch={onSearch} />);

  const input = screen.getByPlaceholderText(/enter flight number/i);

// Type flight number
  fireEvent.change(input, { target: { value: "DL200" } });

// Press Enter key
  fireEvent.keyDown(input, { key: "Enter" });

// Check that search function was called
  expect(onSearch).toHaveBeenCalledWith("DL200");
});