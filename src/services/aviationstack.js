// Service to fetch real flight data from AviationStack API
const API_KEY = import.meta.env.VITE_AVIATIONSTACK_KEY;
// Request flight data by flight number
export async function fetchFlightByNumber(flightNumber) {
  const res = await fetch(
    `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${encodeURIComponent(
      flightNumber
    )}`
  );

  const data = await res.json();

  if (!data.data || data.data.length === 0) {
    throw new Error("Flight not found");
  }

  const f = data.data[0];

  return {
    flightNumber: f.flight?.iata ?? flightNumber,
    airline: f.airline?.name ?? "Unknown Airline",
    departureAirport: f.departure?.iata ?? "Unknown",
    arrivalAirport: f.arrival?.iata ?? "Unknown",
    status: f.flight_status ?? "Unknown",

    estimatedArrival: f.arrival?.estimated ?? null,
    terminal: f.departure?.terminal ?? null,
    gate: f.departure?.gate ?? null,
    seats: f.aircraft?.seats ?? null,
  };
}