💰 Smart Expense Tracker

A modern, interactive financial management web application built with React (Create React App), featuring dynamic income and expense tracking, real-time balance calculation, and a clean fintech-style dashboard interface.

🌟 Features
💵 Transaction Management

Add income transactions

Add expense transactions

Delete transactions

Automatic UI refresh without page reload

📊 Financial Dashboard

Real-time balance calculation

Total income tracking

Total expense tracking

Dynamic state updates using React Hooks

🧠 State Management

React Functional Components

useState Hook

Props-based component communication

Immutable state updates

🎨 Modern UI Design

Gradient background

Glassmorphism dashboard

Responsive layout

Smooth hover animations

Clean typography

📋 Project Structure
Smart-Expense-Tracker/
├── public/
│   └── index.html
├── src/
│   ├── App.js                 # Main app component
│   ├── index.js               # React entry point
│   ├── styles/
│   │   └── App.css            # Global styling
│   ├── components/
│   │   ├── Header.js
│   │   ├── Summary.js
│   │   ├── TransactionForm.js
│   │   ├── TransactionList.js
│   │   └── TransactionItem.js
├── package.json
└── README.md
⚙️ Tech Stack

Frontend Framework: React 18+
Build Tool: Create React App
State Management: React Hooks
Styling: CSS3
Version Control: Git & GitHub

🚀 Getting Started
Prerequisites

Node.js (v16 or higher)

npm

Installation

Clone the repository:

git clone https://github.com/Sindhu2513/smart-expense-tracker.git

Navigate to the project directory:

cd smart-expense-tracker

Install dependencies:

npm install

Start the development server:

npm start

Application runs at:

http://localhost:3000
🧮 Core Features Explained
Transaction System

Transactions are stored in a state array using useState.
New transactions are added immutably, ensuring proper React rendering.

Financial Calculation Logic

filter() separates income and expense transactions

reduce() calculates total income and total expense

Balance = Income − Expense

UI updates instantly without page reload

Component Architecture

The application follows a modular structure:

Header Component

Summary Component

Transaction Form Component

Transaction List Component

📦 Dependencies
Production

react – React library

react-dom – React DOM rendering

Development

react-scripts – Build tool for Create React App

eslint – Linting tool

🔧 Configuration
Create React App Configuration

This project uses the standard Create React App configuration.
You can customize build settings using:

npm run build
📝 Available Scripts
npm start        # Start development server
npm run build    # Create production build
npm test         # Run tests
npm run eject    # Eject CRA configuration
💡 Future Enhancements

LocalStorage persistence

Chart integration (Chart.js)

Category filtering

Backend integration (Node.js + MongoDB)

Authentication system

Deployment to Vercel / Netlify

👩‍💻 Developer

Sindhu
Java Full Stack Developer | React Enthusiast

📄 License

This project is open-source and created for learning and training purposes.