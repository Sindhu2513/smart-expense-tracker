##💰 Smart Expense Tracker

A modern, interactive financial management web application built using React (Create React App).
The application allows users to manage income and expenses dynamically with real-time balance updates and a clean dashboard interface.

##🌟 Features
##💵 Transaction Management

Add income transactions

Add expense transactions

Delete transactions

Real-time UI updates

##📊 Financial Dashboard

Live total balance calculation

Total income tracking

Total expense tracking

Automatic UI refresh without page reload

##🧠 State Management

React Functional Components

useState Hook

Props-based component communication

Immutable state updates

##🎨 Modern UI Design

Gradient background

Glassmorphism dashboard

Responsive layout

Hover animations

Clean typography

##📋 Project Structure
Smart-Expense-Tracker/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   └── App.css
│   ├── components/
│   │   ├── Header.js
│   │   ├── Summary.js
│   │   ├── TransactionForm.js
│   │   ├── TransactionList.js
│   │   └── TransactionItem.js
├── package.json
└── README.md
##⚙️ Tech Stack

Frontend Framework: React
Build Tool: Create React App
State Management: React Hooks
Styling: CSS3
Version Control: Git & GitHub

##🚀 Getting Started
Prerequisites

Node.js (v16 or higher)

npm

##Installation

Clone the repository:

git clone https://github.com/Sindhu2513/smart-expense-tracker.git

Navigate to the project folder:

cd smart-expense-tracker

Install dependencies:

npm install

Start the development server:

npm start

Application runs at:

http://localhost:3000
##🧮 Core Logic Explained
Transaction Handling

Transactions are stored in a state array using useState.

Financial Calculation

filter() separates income and expense

reduce() calculates totals

Balance = Income - Expense

Component Architecture

The application follows a modular component-based structure:

Header component

Summary component

Form component

List component

##📝 Available Scripts
npm start       // Start development server
npm run build   // Build for production
npm test        // Run tests
npm run eject   // Eject CRA configuration
##💡 Future Enhancements

LocalStorage persistence

Chart integration (Chart.js)

Category filtering

Backend integration (Node.js + MongoDB)

Authentication system

Deployment to Vercel / Netlify

##👩‍💻 Developer

Sindhu
Java Full Stack Developer | React Enthusiast

##📄 License

This project is open-source and created for learning and training purposes.
