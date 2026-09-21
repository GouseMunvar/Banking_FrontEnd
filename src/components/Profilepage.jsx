import React, { useEffect } from "react";
import "./outerLayout.css";
import "./ProfilePage.css";
import Header from "./header";
import MenuList from "./MenuList";
import { getProfile } from "../api/apiService";
import { useStateContext } from "./context/StateContext";

const ProfilePage = () => {

  const { profile, setProfile } = useStateContext();


  useEffect(() => {

    const fetchProfile = async () => {
      try {

        const response = await getProfile();

        setProfile(response.profile);

      } catch (error) {

        console.log("Profile error:", error);

      }
    };


    fetchProfile();

  }, [setProfile]);


  if (!profile) {
    return <h3>Loading profile...</h3>;
  }


  return (
    <div className="outerDiv">
      <div className="mainCard">

        <div className="sidePanel">
          <Header />
          <MenuList />
        </div>


        <div className="mainPanel">

          <div className="Container">

            <h3>My Profile</h3>


            <div className="innerContainer">

              <div className="profileHeader">

                <div className="profileAvatar">
                  {profile.name
                    ?.split(" ")
                    .map(word => word[0])
                    .join("")
                  }
                </div>


                <div className="profileNameEmail">

                  <p className="profileName">
                    {profile.name}
                  </p>

                  <p className="profileEmail">
                    {profile.email}
                  </p>

                </div>


                <span className="statusBadge">
                  {profile.status}
                </span>

              </div>



              <div className="profileStats">

                <div className="statCard balanceStat">
                  <p className="statLabel">
                    Wallet balance
                  </p>

                  <p className="statValue">
                    ₹{profile.balance}
                  </p>
                </div>


                <div className="statCard">

                  <p className="statLabel">
                    Total transactions
                  </p>

                  <p className="statValue">
                    {profile.totalTransactions}
                  </p>

                </div>

              </div>




              <div className="profileDetails">

                <div className="detailRow">
                  <span>Full name</span>
                  <span>{profile.name}</span>
                </div>


                <div className="detailRow">
                  <span>Email</span>
                  <span>{profile.email}</span>
                </div>


                <div className="detailRow">
                  <span>User ID</span>
                  <span>{profile.accountNumber}</span>
                </div>


                <div className="detailRow">
                  <span>Member since</span>
                  <span>
                    {new Date(profile.memberSince).toLocaleDateString()}
                  </span>
                </div>


                <div className="detailRow lastRow">

                  <span>Last login</span>

                  <span>
                    {new Date(profile.lastLogin).toLocaleString()}
                  </span>

                </div>


              </div>


              <div className="profileActions">

                <button className="primaryBtn">
                  Edit profile
                </button>

                <button className="secondaryBtn">
                  Change password
                </button>

              </div>


            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;