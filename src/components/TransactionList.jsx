import React from "react";
import "./transactionList.css";
import { IconArrowDownLeft, IconArrowUpRight } from '@tabler/icons-react';



const TransactionList = () => {
  

const transactions = [
  {
    type: "Withdraw",
    date: "Aug 30, 2026",
    amount: "-₹500",
    variant: "withdraw",
    icon: <IconArrowUpRight />
  },
  {
    type: "Deposit",
    date: "Aug 28, 2026",
    amount: "+₹2000",
    variant: "deposit",
    icon: <IconArrowDownLeft />
  },
  {
    type: "Withdraw",
    date: "Aug 25, 2026",
    amount: "-₹750",
    variant: "withdraw",
    icon: <IconArrowUpRight />
  },
  {
    type: "Deposit",
    date: "Aug 20, 2026",
    amount: "+₹5000",
    variant: "deposit",
    icon: <IconArrowDownLeft />
  }
];
  return (
    <div className="transactionList">
      {transactions.map((transaction, index) => (
        <div className="transaction" key={index}>
          <div className="transactionLeft">
            <div className={`transactionIcon ${transaction.variant}`}>
              {transaction.icon}
            </div>
            <div className="transactionTypeAndDate">
              <h3>{transaction.type}</h3>
              <p>{transaction.date}</p>
            </div>
          </div>
          <p className={`amount ${transaction.variant}`}>
            {transaction.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;