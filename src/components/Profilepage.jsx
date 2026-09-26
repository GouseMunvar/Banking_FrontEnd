import React, { useEffect, useState } from "react";
import "./outerLayout.css";
import "./ProfilePage.css";
import Header from "./header";
import MenuList from "./MenuList";
import { getProfile, updatePassword as updatePasswordApi } from "../api/apiService";
import { useStateContext } from "./context/StateContext";
import Modal from "./Modal";
import Input from "./input";

const ProfilePage = () => {
  const {
    profile,
    setProfile,
    updatePassword,
    setUpdatePassword,
    updatePasswordCredentials,
    setUpdatePasswordCredentials,
  } = useStateContext();

  const [passwordError, setPasswordError] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

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

  const closePasswordModal = () => {
    setUpdatePassword(false);
    setPasswordError("");
    setUpdatePasswordCredentials({
      currentPassword: "",
      newPassword: "",
      cnfPassword: "",
    });
  };

 const handleUpdatePassword = async () => {
  if (!updatePasswordCredentials.currentPassword) {
    setPasswordError("Please enter your current password.");
    return;
  }

  if (!updatePasswordCredentials.newPassword) {
    setPasswordError("Please enter a new password.");
    return;
  }

  if (!updatePasswordCredentials.cnfPassword) {
    setPasswordError("Please confirm your new password.");
    return;
  }

  if (updatePasswordCredentials.newPassword !== updatePasswordCredentials.cnfPassword) {
    setPasswordError("New passwords do not match.");
    return;
  }

  try {
    setPasswordLoading(true);
    setPasswordError("");

    
    await updatePasswordApi({
      currentPassword: updatePasswordCredentials.currentPassword,
      newPassword: updatePasswordCredentials.newPassword,
      confirmPassword: updatePasswordCredentials.cnfPassword,
    });

    closePasswordModal();
  } catch (err) {
    setPasswordError(err?.response?.data?.message || err?.message || "Failed to update password.");
  } finally {
    setPasswordLoading(false);
  }
};

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
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div className="profileNameEmail">
                  <p className="profileName">{profile.name}</p>
                  <p className="profileEmail">{profile.email}</p>
                </div>

                <span className="statusBadge">{profile.status}</span>
              </div>

              <div className="profileStats">
                <div className="statCard balanceStat">
                  <p className="statLabel">Wallet balance</p>
                  <p className="statValue">₹{profile.balance}</p>
                </div>

                <div className="statCard">
                  <p className="statLabel">Total transactions</p>
                  <p className="statValue">{profile.totalTransactions}</p>
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
                  <span>{new Date(profile.memberSince).toLocaleDateString()}</span>
                </div>

                <div className="detailRow lastRow">
                  <span>Last login</span>
                  <span>{new Date(profile.lastLogin).toLocaleString()}</span>
                </div>
              </div>

              <div className="profileActions">
                <button className="primaryBtn">Edit profile</button>
                <button className="secondaryBtn" onClick={() => setUpdatePassword(true)}>
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {updatePassword && (
        <Modal closeModal={closePasswordModal}>
          <h3 className="modalTitle">Change Password</h3>

          <div className="modalFields">
            <Input
              value={updatePasswordCredentials.currentPassword}
              name="currentPassword"
              type="password"
              placeholder="Enter current password"
              onChange={(e) => {
                setPasswordError("");
                setUpdatePasswordCredentials((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }));
              }}
            />

            <Input
              value={updatePasswordCredentials.newPassword}
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              onChange={(e) => {
                setPasswordError("");
                setUpdatePasswordCredentials((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }));
              }}
            />

            <Input
              value={updatePasswordCredentials.cnfPassword}
              name="cnfPassword"
              type="password"
              placeholder="Confirm new password"
              onChange={(e) => {
                setPasswordError("");
                setUpdatePasswordCredentials((prev) => ({
                  ...prev,
                  cnfPassword: e.target.value,
                }));
              }}
            />
          </div>

          {passwordError && <p className="passwordError">{passwordError}</p>}

          <div className="modalActions">
            <button className="secondaryBtn" onClick={closePasswordModal} disabled={passwordLoading}>
              Cancel
            </button>
            <button className="primaryBtn" onClick={handleUpdatePassword} disabled={passwordLoading}>
              {passwordLoading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfilePage;