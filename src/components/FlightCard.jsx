// Component to display flight information
import mockRecentFlights from "../services/mockRecentFlights";
export default function FlightCard({ data }) {

// If no data — show nothing
  if (!data) return null;

// Take needed fields from API or mock data
  const {
    flightNumber,
    airline,
    departureAirport,
    arrivalAirport,
    status,
    aircraftId,
    aircraftType,
    registration,
    seats,
    terminal,
    gate,
    estimatedArrival,
  } = data;

// Show recent flights for same aircraft (mock)
  const recent = aircraftId
    ? mockRecentFlights
        .filter((f) => f.aircraftId === aircraftId)
        .slice(0, 3)
    : [];

// Flight info card layout   
  return (
    <div className="flightCard">
      <h3>Flight {flightNumber}</h3>

      <p>
        <strong>Airline:</strong> {airline}
      </p>
      <p>
        <strong>From:</strong> {departureAirport}
      </p>
      <p>
        <strong>To:</strong> {arrivalAirport}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      {estimatedArrival && (
      <p>
        <strong>🕒 Estimated arrival:</strong>{" "}
        {new Date(estimatedArrival).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
       })}
      </p>
      )}
      {terminal && (
        <p>
          🏢 <strong>Terminal:</strong> {terminal}
        </p>
      )}
      {gate && (
        <p>
          🚪 <strong>Gate:</strong> {gate}
        </p>
      )}
      {seats && (
        <p>
          💺<strong>Seats:</strong> {seats}
        </p>
      )}

      {/* Optional extra aircraft info */}
      {(aircraftType || registration) && (
        <>
          <hr />
          {aircraftType && (
            <p>
              <strong>Aircraft type:</strong>
              <a 
                href={`https://www.google.com/search?q=${aircraftType}+aircraft`}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1e40af" }}
              >
                {aircraftType}
              </a>
            </p>
          )}
          {registration && (
            <p>
              <strong>Registration:</strong> {registration}
            </p>
          )}
        </>
      )}

      {/* Recent flights section */}
      {recent.length > 0 && (
        <>
          <hr />
        <h4>✈ Recent flights</h4>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {recent.map((r) => (
            <li key={r.id}>
              {r.flightNumber} — {r.from} → {r.to} ({r.status})
            </li>
        ))}
        </ul>
        </>
      )}
    </div>
  );
}