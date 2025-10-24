import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import PropTypes from "prop-types";

const COLORS = ["#2ecc71", "#e67e22", "#e74c3c", "#9b59b6", "#3498db"];

const CategoryChart = ({ transactions }) => {
  const data = [];

  const categoryMap = {};
  transactions.forEach((t) => {
    if (categoryMap[t.category]) {
      categoryMap[t.category] += Math.abs(t.amount);
    } else {
      categoryMap[t.category] = Math.abs(t.amount);
    }
  });

  for (const key in categoryMap) {
    data.push({ name: key, value: categoryMap[key] });
  }

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h3>Expenses by Category</h3>
      <PieChart width={400} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

CategoryChart.propTypes = { transactions: PropTypes.array.isRequired };
export default CategoryChart;
