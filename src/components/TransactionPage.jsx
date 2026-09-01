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
import './TransactionPage.css'
  import { IconArrowDownLeft, IconArrowUpRight } from '@tabler/icons-react';

const TransactionPage = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const menuList = [
    { icon: <IconLayoutDashboard size={20} />, text: "Dashboard" },
    { icon: <IconList size={20} />, text: "Transactions" },
    { icon: <IconUser size={20} />, text: "My Profile" },
  ];



 const transactions = [
  { type: "Withdraw", date: "Aug 30, 2026", amount: "-₹500", variant: "withdraw", icon: <IconArrowUpRight /> },
  { type: "Deposit", date: "Aug 28, 2026", amount: "+₹2000", variant: "deposit", icon: <IconArrowDownLeft /> },
  { type: "Withdraw", date: "Aug 25, 2026", amount: "-₹750", variant: "withdraw", icon: <IconArrowUpRight /> },
  { type: "Deposit", date: "Aug 20, 2026", amount: "+₹5000", variant: "deposit", icon: <IconArrowDownLeft /> },
  { type: "Withdraw", date: "Aug 15, 2026", amount: "-₹300", variant: "withdraw", icon: <IconArrowUpRight /> },
  { type: "Deposit", date: "Aug 10, 2026", amount: "+₹1200", variant: "deposit", icon: <IconArrowDownLeft /> },
  { type: "Withdraw", date: "Aug 05, 2026", amount: "-₹900", variant: "withdraw", icon: <IconArrowUpRight /> },
  { type: "Deposit", date: "Aug 01, 2026", amount: "+₹3000", variant: "deposit", icon: <IconArrowDownLeft /> },
];

  const filteredTransactions = transactions
    .filter((t) => (filter === "all" ? true : t.variant === filter))
    .filter((t) =>
      t.type.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="outerDiv">
      <div className="mainCard">
        {/* Sidebar */}
        <div className="sidePanel">
          <Header />
          <div className="menuList">
            {menuList.map((item, index) => (
              <div
                className={`sideList ${item.text === "Transactions" ? "active" : ""}`}
                key={index}
              >
                <span className="menuIcon">{item.icon}</span>
                <span className="menuText">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mainPanel">
          <div className="Container">
            <h3>Transactions</h3>
            <div className="innerContainer">

              <div className="filterRow">
                <div className="filterChips">
                  <span
                    className={`filterChip ${filter === "all" ? "active" : ""}`}
                    onClick={() => setFilter("all")}
                  >
                    All
                  </span>
                  <span
                    className={`filterChip ${filter === "deposit" ? "active" : ""}`}
                    onClick={() => setFilter("deposit")}
                  >
                    Deposits
                  </span>
                  <span
                    className={`filterChip ${filter === "withdraw" ? "active" : ""}`}
                    onClick={() => setFilter("withdraw")}
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
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <TransactionList transactions={filteredTransactions} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;