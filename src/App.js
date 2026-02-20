import React, { useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./Styles/App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <Header />
        <Summary transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;