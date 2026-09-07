import React, { useState } from "react";
import "./outerLayout.css";
import Header from "./header";

import {
  IconLayoutDashboard,
  IconList,
  IconUser,
  IconSearch,
} from "@tabler/icons-react";

import TransactionList from "./TransactionList";
import "./TransactionPage.css";

import { useStateContext } from "./context/StateContext";
import MenuList from "./MenuList";


const TransactionPage = () => {

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const { transactions, loading } = useStateContext();


  


  const filteredTransactions = transactions
    .filter((transaction) =>
      filter === "all"
        ? true
        : transaction.variant === filter
    )
    .filter((transaction) =>
      transaction.type
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  return (

    <div className="outerDiv">

      <div className="mainCard">


        {/* Sidebar */}

        <div className="sidePanel">

          <Header />

         <MenuList/>

        </div>



        {/* Main Content */}

        <div className="mainPanel">

          <div className="Container">

            <h3>
              Transactions
            </h3>


            <div className="innerContainer">


              {/* Filter + Search */}

              <div className="filterRow">


                <div className="filterChips">


                  <span
                    className={`filterChip ${
                      filter === "all"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => setFilter("all")}
                  >
                    All
                  </span>



                  <span
                    className={`filterChip ${
                      filter === "deposit"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setFilter("deposit")
                    }
                  >
                    Deposits
                  </span>



                  <span
                    className={`filterChip ${
                      filter === "withdraw"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setFilter("withdraw")
                    }
                  >
                    Withdrawals
                  </span>


                </div>



                <div className="searchBox">

                  <IconSearch size={14} />


                  <input
                    type="text"
                    placeholder="Search transactions"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />

                </div>


              </div>




              {
                loading ? (

                  <p>
                    Loading transactions...
                  </p>

                ) : (

                  <TransactionList
                    transactions={filteredTransactions}
                  />

                )
              }



            </div>


          </div>


        </div>


      </div>


    </div>

  );
};


export default TransactionPage;