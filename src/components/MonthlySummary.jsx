// src/components/MonthlySummary.js
import React from "react";

const MonthlySummary = ({ transactions }) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Filter only current month's transactions
  const monthlyTransactions = transactions.filter((t) => {
    const date = new Date(t.date || Date.now());
    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });

  // Calculate totals
  const income = monthlyTransactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = monthlyTransactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const savings = income - expense;

  return (
    <div className="monthly-summary">
      <h3>
        📅 Monthly Summary (
        {new Date().toLocaleString("default", { month: "long" })})
      </h3>
      <div className="summary-box">
        <p>
          <strong>Income:</strong> ₹{income.toFixed(2)}
        </p>
        <p>
          <strong>Expense:</strong> ₹{expense.toFixed(2)}
        </p>
        <p>
          <strong>Savings:</strong> ₹{savings.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MonthlySummary;
