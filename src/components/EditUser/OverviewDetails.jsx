import { useContext, useEffect, useState } from "react";
import "./Overview.css";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";

const OverviewDetails = ({ userEmail, setO1, setTR, setUS }) => {
  const { setLoader } = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);
  const [userData, setUserData] = useState(null);

  console.log("userEmail", userEmail);

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
      setUserData(getUserData(userEmail));
      // console.log(coins);
    }
    console.log(userData);
  }, []);

  return (
    <div className="details_con">
      <div className="details_section">
        <div className="details_left">
          <label>fullname:</label>
          <div>{userData?.fullName}</div>

          <label>email:</label>
          <div>{userData?.email}</div>
        </div>

        <div className="details_right">
          <label>Account creation date:</label>
          <div>{new Date(userData?.createdAt).toLocaleDateString()}</div>
        </div>
      </div>

      <div
        className="balance_btn"
        onClick={() => {
          setO1(false);
          setUS(true);
          setTR(false);
        }}
      >
        <div className="mod_bal">modify balance</div>

        <div className="bal">${userData?.amount}.00</div>

        <div className="avail_bal">available balance</div>
      </div>
    </div>
  );
};

export default OverviewDetails;
