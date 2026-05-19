# React Live Clock ⏰

A simple React application that displays the current date and time, updating every second in real time. It uses **React hooks** and **date-fns** for formatting.

## Features

- Displays current date and time
- Updates every second automatically
- Clean and minimal UI
- Uses `date-fns` for date formatting

## Demo

When running, the app shows something like:
current time: May 19th, 2026 at 10:45:12 AM


## Tech Stack

- React (Functional Components)
- React Hooks (`useState`, `useEffect`)
- date-fns
- CSS

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/react-live-clock.git

Navigate into the project directory:
cd react-live-clock

Install dependencies:
npm install
Usage

Start the development server:
npm run dev
or (if using Create React App):
npm start

Then open:
http://localhost:5173
(or the port shown in your terminal)

Project Structure
src/
 ├── App.jsx
 ├── style.css
 └── main.jsx
Dependencies

Make sure date-fns is installed:
npm install date-fns