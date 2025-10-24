import React from "react";
import PropTypes from "prop-types";

const Balance = ({ transactions }) => {
  const balance = transactions.reduce((acc, t) => acc + t.amount, 0).toFixed(2);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>₹{balance}</h1>
    </div>
  );
};

Balance.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default Balance;
