import React, { useEffect, useState } from "react";
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
import Modal from "./Modal";

import {
  getBalance,
  depositAmount,
  withdrawAmount
} from "../api/apiService";


const OuterLayout = () => {

  const [balance, setBalance] = useState(0);

  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const [amount, setAmount] = useState("");



  const menuList = [
    { icon: <IconLayoutDashboard size={20} />, text: "Dashboard" },
    { icon: <IconList size={20} />, text: "Transactions" },
    { icon: <IconUser size={20} />, text: "My Profile" },
  ];



  const fetchBalance = async () => {

    try {

      const data = await getBalance();

      setBalance(data.balance);

    } catch(error){

      console.log(error);

    }

  };



  useEffect(()=>{

    fetchBalance();

  },[]);



  const handleDeposit = async()=>{

    try{

      const data = await depositAmount(Number(amount));

      setBalance(data.balance);

      setAmount("");

      setShowDeposit(false);


    }catch(error){

      console.log(error);

    }

  };



  const handleWithdraw = async()=>{

    try{

      const data = await withdrawAmount(Number(amount));

      setBalance(data.balance);

      setAmount("");

      setShowWithdraw(false);


    }catch(error){

      console.log(error);

    }

  };





  return (

    <div className="outerDiv">

      <div className="mainCard">


        {/* Sidebar */}

        <div className="sidePanel">

          <Header />


          <div className="menuList">

            {
              menuList.map((item,index)=>(

                <div className="sideList" key={index}>

                  <span className="menuIcon">
                    {item.icon}
                  </span>


                  <span className="menuText">
                    {item.text}
                  </span>

                </div>

              ))
            }


          </div>


        </div>





        {/* Main Content */}

        <div className="mainPanel">


          <div className="Container">


            <h3>
              Dashboard
            </h3>



            <div className="innerContainer">



              <div className="headerDiv">

                <Header />

                <div className="userName">
                  SL
                </div>

              </div>





              <div className="balanceCard">

                <p>
                  Available Balance
                </p>


                <h1>
                  ₹{balance}
                </h1>


              </div>






              <div className="buttonDiv">


                <Button

                  icon={
                    <IconArrowDownLeft 
                      size={16}
                      color="black"
                    />
                  }

                  text="Withdraw"

                  onClick={()=>setShowWithdraw(true)}

                />





                <Button

                  icon={
                    <IconArrowUpRight
                      size={16}
                      color="black"
                    />
                  }

                  text="Deposit"

                  onClick={()=>setShowDeposit(true)}

                />



              </div>






              <div className="recentTransactions">


                <div className="transactionHeader">

                  <p>
                    Recent History
                  </p>


                  <p>
                    View All
                  </p>


                </div>


              </div>





              <div
                style={{
                  flex:1,
                  minHeight:0,
                  overflowY:"auto"
                }}
              >

                <TransactionList />

              </div>





            </div>


          </div>


        </div>



      </div>






      {/* Deposit Modal */}


      {
        showDeposit && (

          <Modal
            closeModal={()=>setShowDeposit(false)}
          >

            <h2>
              Deposit Money
            </h2>


            <input

              className="input"

              type="number"

              placeholder="Enter amount"

              value={amount}

              onChange={(e)=>setAmount(e.target.value)}

            />



            <button

              className="submitBtn"

              onClick={handleDeposit}

            >

              Deposit

            </button>



          </Modal>

        )
      }







      {/* Withdraw Modal */}


      {
        showWithdraw && (

          <Modal
            closeModal={()=>setShowWithdraw(false)}
          >

            <h2>
              Withdraw Money
            </h2>


            <input

              className="input"

              type="number"

              placeholder="Enter amount"

              value={amount}

              onChange={(e)=>setAmount(e.target.value)}

            />



            <button

              className="submitBtn"

              onClick={handleWithdraw}

            >

              Withdraw

            </button>



          </Modal>

        )
      }



    </div>

  );
};


export default OuterLayout;