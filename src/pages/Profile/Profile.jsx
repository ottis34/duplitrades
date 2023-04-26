import "./Profile.css";
import ProfileSettings from "../../components/Profile/main/ProfileSettings";
import Notification from "../../components/Profile/notification/Notification";
import Security from "../../components/Profile/security/Security";
import Withdraw_wallets from "../../components/Profile/withdraw_wallets/Withdraw_wallets";
import { BsCamera } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setWidName } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = () => {
    const cookies = new Cookies();
    cookies.remove("userData");
    cookies.remove("userToken");
    window.location.href = "/";
  };

  useEffect(() => {
    setWidName("calc");
  });

  console.log("user", user.fullName);

  const [p1, setP1] = useState(true);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [p4, setP4] = useState(false);

  const handleP1 = () => {
    setP1(true);
    setP2(false);
    setP3(false);
    setP4(false);
  };
  const handleP2 = () => {
    setP2(true);
    setP1(false);
    setP3(false);
    setP4(false);
  };
  const handleP3 = () => {
    setP3(true);
    setP1(false);
    setP2(false);
    setP4(false);
  };
  const handleP4 = () => {
    setP4(true);
    setP1(false);
    setP2(false);
    setP3(false);
  };

  return (
    <div class="container">
      <header>
        <div class="profile_picture">
          <BsCamera className="profile_img" />
        </div>
        <div class="profile_info">
          <div class="user-name">{user?.fullName}</div>
          <div class="user-email">{user?.email}</div>
        </div>
      </header>

      <nav>
        <ul>
          <li onClick={handleP1} className={`${p1 && "select_navlink"}`}>
            profile
          </li>
          <li onClick={handleP2} className={`${p2 && "select_navlink"}`}>
            notification
          </li>
          <li onClick={handleP3} className={`${p3 && "select_navlink"}`}>
            security
          </li>
          <li onClick={handleP4} className={`${p4 && "select_navlink"}`}>
            withdraw / wallets
          </li>
          <li class="logout_color" onClick={logOut}>
            logout
          </li>
        </ul>
      </nav>
      <main>
        {p1 && <ProfileSettings />}
        {p2 && <Notification />}
        {p3 && <Security />}
        {p4 && <Withdraw_wallets />}
      </main>
    </div>
  );
};

export default Profile;
