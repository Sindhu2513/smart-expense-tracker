function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary">
      <div className="balance">Balance: ₹{balance}</div>
      <div className="income">Income: ₹{income}</div>
      <div className="expense">Expense: ₹{expense}</div>
    </div>
  );
}

export default Summary;