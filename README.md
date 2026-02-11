# Mini Flight Tracker

![App Screenshot](screenshot.png)

Mini Flight Tracker is a React application that allows users to enter a flight number and receive flight information.  
The app shows airline name, departure and arrival airports, flight status, estimated arrival time, gate, terminal, and optional aircraft details.  
If an API key is not provided, the application automatically switches to mock data.

This tool can be useful for:
- Travelers checking their flight status
- People meeting passengers at the airport
- Airport staff or aviation students
- Aviation enthusiasts interested in flight information

The project demonstrates working with React components, state management, asynchronous requests, conditional rendering, and automated testing.

---

## Features

- Search flights by number  
- Airline and airport information  
- Flight status display  
- Gate and terminal information  
- Estimated arrival time  
- Optional aircraft details  
- Recent flights section  
- Loading indicator  
- Error handling  
- Automated tests  

---

## Technologies Used

- React  
- Vite  
- JavaScript (ES6+)  
- CSS  
- Vitest  
- React Testing Library  

---

## Installation

Clone the repository:
``` bash
git clone https://github.com/N252614/mini-flight-tracker.git
```
Go to project folder:
``` bash
cd mini-flight-tracker
```
Install dependencies:
``` bash
npm install
```
---

## Running the Project

Start development server:
``` bash
npm run dev
```

Open browser and go to:
``` bash
http://localhost:5173
```

---

## Running Tests

Run automated tests:
``` bash
npm run test
```
---

## Environment Variables

Create a `.env.local` file in the root folder and add:
VITE_AVIATIONSTACK_KEY=your_api_key_here

If no key is provided, the application will use mock data automatically.

---

## Project Structure
src/
  components/
    FlightCard.jsx
    SearchBar.jsx
  services/
    aviationstack.js
    mockFlightApi.js
    mockRecentFlights.js
  styles/
  App.jsx
  main.jsx

tests/
  App.test.jsx
  FlightCard.test.jsx
  SearchBar.test.jsx

screenshot.png

---

## Future Improvements

- Real-time flight status
- Map view for flights
- Save favorite flights
- Mobile optimization  


---

## Author
**Nataliia Katina**
