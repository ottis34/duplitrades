import axios from "axios";
import "./Overview.css";
import { Cookies, useCookies } from "react-cookie";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const UserSettings = ({ userEmail }) => {
  console.log("settings", userEmail);
  const { setLoader } = useContext(UserContext);

  const [cookies, setCookie] = useCookies(["user"]);
  const [amount, setAmount] = useState(0);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  const getUserData = async (userEmail) => {
    console.log("context", userEmail);

    // setLoader(true);
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/admin/getUser",
        {
          email: userEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        setUserData(res.data);
        console.log("user data");
        setLoader(false);
        return res.data;
      })
      .catch((err) => {
        setLoader(false);
        setUserData(null);
        const cookies = new Cookies();
        // cookies.remove("userData");
        // cookies.remove("userToken");
        // window.location.href = "/signin";
        console.log(err);
      });
  };

  useEffect(() => {
    if (!userData) {
      getUserData(userEmail);
      // console.log(coins);
    }
  }, []);

  const addFund = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/admin/increase/",
        {
          email: userEmail,
          amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("Added Funds");
      })
      .catch((err) => {
        alert("Error Occured");
        console.log(err);
      });

    console.log("Form data");
  };

  const removeFund = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/admin/decrease/",
        {
          email: userEmail,
          amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        alert("Removed Funds");
        console.log(res);
      })
      .catch((err) => {
        alert("Error Occured");
        console.log(err);
      });

    console.log("Form data");
  };

  const changePassword = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/admin/changePassword/",
        {
          email: userEmail,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        alert("Password Changed");
        console.log(res);
      })
      .catch((err) => {
        alert("Error Occured");
        console.log(err);
      });

    console.log("Form data");
  };

  const changeUserName = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/admin/updateProfile/",
        {
          email: userEmail,
          userDetails: {
            fullName: userName,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        alert("User Name Changed");
        console.log(res);
      })
      .catch((err) => {
        alert("Error Occured");
        console.log(err);
      });

    console.log("Form data");
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    alert("This action cnnot be undone");
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/admin/deleteUser/",
        {
          email: userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        alert("User Deleted");
        window.location.href = "/admin";
        console.log(res);
      })
      .catch((err) => {
        alert("Error Occured");
        console.log(err);
      });

    console.log("Form data");
  };

  return (
    <div className="user_section">
      <form>
        <fieldset>
          <legend>modify balance</legend>
          <input
            type="text"
            placeholder={`$ ${userData?.amount}`}
            pattern="[0-9]{5}"
            maxLength="5"
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="mod_bal_btns">
            <input
              type="button"
              onClick={addFund}
              value="Add"
              className="green"
            />
            <input
              type="button"
              onClick={removeFund}
              value="Subtract"
              className="red"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>change password</legend>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />

          <div className="user_btn">
            <input type="button" onClick={changePassword} value="Change" />
          </div>
        </fieldset>

        <fieldset>
          <legend>change user's name</legend>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder={userData?.fullName}
          />

          <div className="user_btn">
            <input
              type="button"
              onClick={changeUserName}
              className="user_input"
              value="Change"
            />
          </div>
        </fieldset>

        <input
          type="button"
          onClick={deleteUser}
          className="delete_user red"
          value="Delete this user!"
        />
      </form>
    </div>
  );
};

export default UserSettings;
