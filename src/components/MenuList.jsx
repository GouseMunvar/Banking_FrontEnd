import React, { useEffect } from "react";
import {
  IconLayoutDashboard,
  IconList,
  IconUser,
} from "@tabler/icons-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStateContext } from "./context/StateContext";
import "./MenuList.css";


const MenuList = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { index, setIndex } = useStateContext();


  const menuList = [
    {
      icon: <IconLayoutDashboard size={20} />,
      text: "Dashboard",
      path: "/",
      value: 0,
    },
    {
      icon: <IconList size={20} />,
      text: "Transactions",
      path: "/transaction",
      value: 1,
    },
    {
      icon: <IconUser size={20} />,
      text: "My Profile",
      path: "/profile",
      value: 2,
    },
  ];


  // Update active menu when URL changes or page reloads
  useEffect(() => {

    const currentMenu = menuList.find(
      (item) => item.path === location.pathname
    );


    if (currentMenu) {
      setIndex(currentMenu.value);
    }

  }, [location.pathname]);


  const handleMenuClick = (item) => {

    setIndex(item.value);

    navigate(item.path);

  };


  return (

    <ul className="menuList">

      {menuList.map((item) => (

        <li
          key={item.value}
          className={`sideList ${
            index === item.value ? "active" : ""
          }`}
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