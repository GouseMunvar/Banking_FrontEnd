import React from "react";
import {
  IconLayoutDashboard,
  IconList,
  IconUser,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./context/StateContext";
import "./MenuList.css";

const MenuList = () => {
  const { index, setIndex } = useStateContext();
  const navigate = useNavigate();

  const menuList = [
    { 
      icon: <IconLayoutDashboard size={20} />, 
      text: "Dashboard",
      path: "/",
      value:0
    },
    { 
      icon: <IconList size={20} />, 
      text: "Transactions",
      path: "/transaction",
      value:1
    },
    { 
      icon: <IconUser size={20} />, 
      text: "My Profile",
      path: "/profile",
      value:2
    },
  ];

  const handleMenuClick = (item) => {
  console.log("clicked", item.path, item.value);
  setIndex(item.value);
  navigate(item.path);
};

  return (
    <ul className="menuList">
      {menuList.map((item, i) => (
        <li
          key={i}
          className={`sideList ${index === i ? "active" : ""}`}
          onClick={() => handleMenuClick(item)}
        >
          <span className="menuIcon">
            {item.icon}
          </span>

          <span className="menuText">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;