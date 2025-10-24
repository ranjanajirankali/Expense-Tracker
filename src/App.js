import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import CategoryChart from "./components/CategoryChart";
import MonthlySummary from "./components/MonthlySummary";
import SmartInsights from "./components/SmartInsights"; // 🧠 AI Insights
import "./App.css";

function App() {
  // Load transactions from localStorage
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add new transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        {/* Header Section */}
        <Header />
        <p className="greeting">
          Track your daily expenses, analyze spending, and save smarter 💸
        </p>

        {/* Balance Overview */}
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />

        {/* Monthly Summary Section */}
        <MonthlySummary transactions={transactions} />

        {/* AI Smart Insights */}
        <SmartInsights transactions={transactions} />

        {/* Category Chart */}
        <CategoryChart transactions={transactions} />

        {/* Transaction History */}
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

        {/* Add New Transaction */}
        <AddTransaction addTransaction={addTransaction} />

        {/* Footer */}
        <footer className="footer">
          <p>💰 Smart Daily Expense Tracker 💡</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
