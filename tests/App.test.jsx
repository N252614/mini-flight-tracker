// Import tools
import { render, screen, fireEvent, act } from "@testing-library/react";
// Import app
import App from "../src/App";

// Helper for promises
const flushPromises = () => new Promise((resolve) => queueMicrotask(resolve));

test(
  "search shows loading and then flight data",
  async () => {
// Use fake timers
    vi.useFakeTimers();

// Mock fetch response
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: [
          {
            flight: { iata: "AA101" },
            airline: { name: "Demo Airlines" },
            departure: { iata: "DEN" },
            arrival: { iata: "LAX" },
            flight_status: "scheduled",
          },
        ],
      }),
    });

// Render app
    render(<App />);

// Find input and button
    const input = screen.getByPlaceholderText(/enter flight number/i);
    const button = screen.getByRole("button", { name: /search/i });

// Type flight
    fireEvent.change(input, { target: { value: "AA101" } });

// Click search
    fireEvent.click(button);

// Check loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

// Run timers
    await act(async () => {
      await vi.runAllTimersAsync();
      await flushPromises();
    });

// Check result
    expect(
      screen.getByRole("heading", { name: /flight aa101/i })
    ).toBeInTheDocument();

// Restore
    global.fetch = originalFetch;
    vi.useRealTimers();
  },
  10000
);

test(
  "shows error if flight is not found",
  async () => {
    vi.useFakeTimers();

// Mock empty data
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: [] }),
    });

    render(<App />);

    const input = screen.getByPlaceholderText(/enter flight number/i);
    const button = screen.getByRole("button", { name: /search/i });

// Type wrong flight
    fireEvent.change(input, { target: { value: "ZZ999" } });
    fireEvent.click(button);

// Check loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

// Run timers
    await act(async () => {
      await vi.runAllTimersAsync();
      await flushPromises();
    });

// Check error
    expect(screen.getByText(/flight not found/i)).toBeInTheDocument();

    global.fetch = originalFetch;
    vi.useRealTimers();
  },
  10000
);