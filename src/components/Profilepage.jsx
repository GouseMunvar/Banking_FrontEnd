import React from "react";
import "./outerLayout.css";
import "./ProfilePage.css";
import Header from "./header";
import {
  IconLayoutDashboard,
  IconList,
  IconUser,
} from "@tabler/icons-react";
import MenuList from "./MenuList";

const ProfilePage = () => {
  const menuList = [
    { icon: <IconLayoutDashboard size={20} />, text: "Dashboard" },
    { icon: <IconList size={20} />, text: "Transactions" },
    { icon: <IconUser size={20} />, text: "My Profile" },
  ];

  const user = {
    name: "Jordan Lee",
    email: "jordan@email.com",
    initials: "JL",
    status: "Active",
    balance: "$4,820.50",
    totalTransactions: 37,
    userId: "#00214",
    memberSince: "Jan 14, 2025",
    lastLogin: "Aug 29, 2026, 9:42 PM",
  };

  return (
    <div className="outerDiv">
      <div className="mainCard">
        {/* Sidebar */}
        <div className="sidePanel">
          <Header />
          {/* <div className="menuList">
            {menuList.map((item, index) => (
              <div
                className={`sideList ${item.text === "My Profile" ? "active" : ""}`}
                key={index}
              >
                <span className="menuIcon">{item.icon}</span>
                <span className="menuText">{item.text}</span>
              </div>
            ))}
          </div> */}
          <MenuList/>
        </div>

        {/* Main Content */}
        <div className="mainPanel">
          <div className="Container">
            <h3>My Profile</h3>

            <div className="innerContainer">

              <div className="profileHeader">
                <div className="profileAvatar">{user.initials}</div>
                <div className="profileNameEmail">
                  <p className="profileName">{user.name}</p>
                  <p className="profileEmail">{user.email}</p>
                </div>
                <span className="statusBadge">{user.status}</span>
              </div>

              <div className="profileStats">
                <div className="statCard balanceStat">
                  <p className="statLabel">Wallet balance</p>
                  <p className="statValue">{user.balance}</p>
                </div>
                <div className="statCard">
                  <p className="statLabel">Total transactions</p>
                  <p className="statValue">{user.totalTransactions}</p>
                </div>
              </div>

              <div className="profileDetails">
                <div className="detailRow">
                  <span>Full name</span>
                  <span>{user.name}</span>
                </div>
                <div className="detailRow">
                  <span>Email</span>
                  <span>{user.email}</span>
                </div>
                <div className="detailRow">
                  <span>User ID</span>
                  <span>{user.userId}</span>
                </div>
                <div className="detailRow">
                  <span>Member since</span>
                  <span>{user.memberSince}</span>
                </div>
                <div className="detailRow lastRow">
                  <span>Last login</span>
                  <span>{user.lastLogin}</span>
                </div>
              </div>

              <div className="profileActions">
                <button className="primaryBtn">Edit profile</button>
                <button className="secondaryBtn">Change password</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;