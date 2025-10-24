import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, deleteTransaction }) => {
  const endRef = useRef(null);

  // Scroll to latest transaction
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transactions]);

  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <Transaction
            key={t.id}
            transaction={t}
            deleteTransaction={deleteTransaction}
          />
        ))}
        <div ref={endRef}></div>
      </ul>
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
};

export default TransactionList;
