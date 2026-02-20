function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="list">
      {transactions.map((t) => (
        <div
          key={t.id}
          className={`item ${t.type === "income" ? "green" : "red"}`}
        >
          <span>{t.description} - ₹{t.amount}</span>
          <button onClick={() => deleteTransaction(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;