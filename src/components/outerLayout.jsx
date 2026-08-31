import React from "react";
import "./outerLayout.css";
import Header from "./header";
import {
  IconLayoutDashboard,
  IconList,
  IconUser,
  IconArrowDownLeft,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Button from "./Button";
import TransactionList from "./TransactionList";
const OuterLayout = () => {
  const menuList = [
    { icon: <IconLayoutDashboard size={20} />, text: "Dashboard" },
    { icon: <IconList size={20} />, text: "Transactions" },
    { icon: <IconUser size={20} />, text: "My Profile" },
  ];

  return (
    <div className="outerDiv">
      <div className="mainCard">
        {/* Sidebar */}
        <div className="sidePanel">
          <Header />
          <div className="menuList">
            {menuList.map((item, index) => (
              <div className="sideList" key={index}>
                <span className="menuIcon">{item.icon}</span>
                <span className="menuText">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mainPanel">
          <div className="Container">
            <h3>Dashboard</h3>
            <div className="innerContainer">
              <div className="headerDiv">
                <Header />
                <div className="userName">SL</div>
              </div>

              <div className="balanceCard">
                <p>Available Balance</p>
                <h1>$5000</h1>
              </div>

              <div className="buttonDiv">
                <Button icon={<IconArrowDownLeft size={16} color="black" />} text="Withdraw" />
                <Button icon={<IconArrowUpRight size={16} color="black" />} text="Deposit" />
              </div>

              <div className="recentTransactions">
                <div className="transactionHeader">
                  <p>Recent History</p>
                  <p>View All</p>
                </div>
              </div>


              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "auto",
                }}
              >
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterLayout;