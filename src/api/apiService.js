import API from "./axiosInstance";


// Register API
export const registerUser = async (userData) => {
  try {

    const response = await API.post(
      "/auth/register",
      userData
    );

    return response.data;

  } catch (error) {

    throw error.response?.data || error.message;

  }
};



// Login API
export const loginUser = async (loginData) => {
  try {

    const response = await API.post(
      "/auth/login",
      loginData
    );


    // save JWT token
    if(response.data.token){
      localStorage.setItem(
        "token",
        response.data.token
      );
    }


    // save user details
    if(response.data.user){
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );
    }


    return response.data;


  } catch(error){

    throw error.response?.data || error.message;

  }
};



// Logout
export const logoutUser = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

};


export const getBalance = async () => {
  try {
    const response = await API.get("/account/balance");

    return response.data;

  } catch (error) {
    console.log(error);

    throw error.response?.data || {
      message: "Unable to fetch balance"
    };
  }
};



export const depositAmount = async (amount) => {
  try {
    const response = await API.post("/account/deposit", {
      amount,
    });

    return response.data;

  } catch (error) {
    console.log(error);

    throw error.response?.data || {
      message: "Deposit failed"
    };
  }
};


export const withdrawAmount = async (amount) => {
  try {
    const response = await API.post("/account/withdraw", {
      amount,
    });

    return response.data;

  } catch (error) {
    console.log(error);

    throw error.response?.data || {
      message: "Withdrawal failed"
    };
  }
};

