export async function fetchFlightMock(flightNumber) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    flightNumber,
    airline: "Demo Airlines",
    departureAirport: "DEN",
    arrivalAirport: "LAX",
    status: "Scheduled",

    aircraftType: "A320",        
    registration: "N123AA",      
    aircraftId: "N123AA", 

    seats: 180,
    terminal: "T3",
    gate: "A12",
    estimatedArrival: "18:45",
  };
}