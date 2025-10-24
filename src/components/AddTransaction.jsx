import React, { useState } from "react";
import PropTypes from "prop-types";

const categories = [
  { name: "Food 🍔", color: "#f39c12" },
  { name: "Travel 🚗", color: "#3498db" },
  { name: "Shopping 🛍️", color: "#9b59b6" },
  { name: "Bills 💡", color: "#e74c3c" },
  { name: "Health 💊", color: "#27ae60" },
  { name: "Entertainment 🎬", color: "#8e44ad" },
  { name: "Other 💸", color: "#95a5a6" },
];

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0].name);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return alert("Please enter valid text and amount");

    addTransaction({
      id: Date.now(),
      text,
      amount: +amount,
      category,
    });

    setText("");
    setAmount("");
    setCategory(categories[0].name);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>Amount (negative - expense, positive - income)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

AddTransaction.propTypes = { addTransaction: PropTypes.func.isRequired };
export default AddTransaction;
