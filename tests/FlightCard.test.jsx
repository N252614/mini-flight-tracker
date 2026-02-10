// Import testing tools
import { render, screen } from "@testing-library/react";
// Import component
import FlightCard from "../src/components/FlightCard";

test("shows nothing if no data", () => {
// Render with null data
  const { container } = render(<FlightCard data={null} />);

// Container should be empty
  expect(container).toBeEmptyDOMElement();
});

test("shows flight information", () => {
// Render with mock data
  render(
    <FlightCard
      data={{
        flightNumber: "AA101",
        airline: "Demo Airlines",
        departureAirport: "DEN",
        arrivalAirport: "LAX",
        status: "Scheduled",
        aircraftId: "N123AA",
      }}
    />
  );

// Check heading with flight number
  expect(
    screen.getByRole("heading", { name: /flight aa101/i })
  ).toBeInTheDocument();

  // Check airline text
  expect(screen.getByText(/demo airlines/i)).toBeInTheDocument();

  // Check airports and status labels
  expect(screen.getByText(/from:/i)).toBeInTheDocument();
  expect(screen.getByText(/to:/i)).toBeInTheDocument();
  expect(screen.getByText(/status:/i)).toBeInTheDocument();
});