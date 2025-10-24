import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        ✖
      </button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
};

export default Transaction;
