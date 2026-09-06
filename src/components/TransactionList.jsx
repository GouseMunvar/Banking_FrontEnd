import React from "react";
import "./transactionList.css";


const TransactionList = ({ transactions = [] }) => {

  return (
    <div className="transactionList">

      {transactions.map((transaction, index) => (

        <div
          className="transaction"
          key={transaction.id || index}
        >

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