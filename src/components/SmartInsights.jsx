// components/SmartInsights.js
import React, { useMemo } from "react";

const SmartInsights = ({ transactions }) => {
  const insights = useMemo(() => {
    if (transactions.length === 0)
      return ["No transactions yet. Start adding!"];

    const totalExpense = transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => acc + Math.abs(t.amount), 0);

    const totalIncome = transactions
      .filter((t) => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);

    const topCategory = transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
        return acc;
      }, {});

    const top = Object.entries(topCategory).sort((a, b) => b[1] - a[1])[0];
    const insightsArr = [];

    if (top)
      insightsArr.push(`Your highest spending is in ${top[0]} (₹${top[1]}).`);
    if (totalExpense > totalIncome)
      insightsArr.push(
        "You're spending more than you earn 💸. Try adjusting your budget."
      );
    else insightsArr.push("Good job! You’re saving more than you spend 🎯.");

    return insightsArr;
  }, [transactions]);

  return (
    <div className="ai-box">
      <h3>🤖 Smart Insights</h3>
      <ul>
        {insights.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmartInsights;
