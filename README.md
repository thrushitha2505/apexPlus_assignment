# apexPlus_assignment

This project is a web application built with React.js for the frontend and Node.js for the backend. The application allows users to create, display, update, and delete scenarios and vehicles. Users can also simulate vehicle movements based on scenario parameters.

Features:
Create, Read, Update, Delete (CRUD) operations for Scenarios and Vehicles
Simulate vehicle movements based on speed and direction
Sidebar navigation for easy access to different sections

Project Structure:
Backend: Node.js with Express to handle API requests and store data in a JSON file.
Frontend: React.js for the user interface and interaction.

Installation
Prerequisites
Node.js and npm installed on your machine.

Backend Setup:
Clone the repository and navigate to backend:
git clone <repository-url>
cd backend

Install backend dependencies:
npm install

Start the backend server:
node server.js

The server will run on http://localhost:3001

Frontend Setup
Navigate to the frontend directory:
cd frontend

Install frontend dependencies:
npm install

Start the React development server:
npm start

The application will run on http://localhost:3000.

Usage
Creating a Scenario
Navigate to the Scenarios section via the sidebar.
Click on "Add Scenario".
Fill out the form with Scenario ID, Name, and Time, then submit.

Creating a Vehicle
Navigate to the Vehicles section via the sidebar.
Click on "Add Vehicle".
Fill out the form with Vehicle ID, Name, Initial Position (X, Y), Speed, and Direction, then submit.

Simulating Vehicle Movement
On the Home page, select a scenario from the dropdown.
Click "Start Simulation" to see the vehicles move according to their parameters.

API Endpoints
Scenarios
GET /scenarios: Get all scenarios.
POST /scenarios: Create a new scenario.
PUT /scenarios/:id: Update a scenario.
DELETE /scenarios/:id: Delete a scenario.

Vehicles
GET /vehicles: Get all vehicles.
POST /vehicles: Create a new vehicle.
PUT /vehicles/:id: Update a vehicle.
DELETE /vehicles/:id: Delete a vehicle.

Repository
The source code is available on GitHub at .






