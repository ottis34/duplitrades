import axios from "axios";
import "./Admin.css";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import EditUser from "../../components/EditUser/Overview";

const Admin = () => {
  const [u1, setU1] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const navigate = useNavigate();

  const { getAllUser, allUsers, loader } = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    if (!allUsers) {
      getAllUser();
      // console.log(coins);
    }
  }, []);

  const handlePop = (email) => {
    setClientEmail(email);
    setU1(true);
  };

  return (
    <div className="adm_coin">
      {loader ? (
        <div className="loader__con">
          <span class="loader"></span>
        </div>
      ) : (
        <>
          <div className="admin__con">
            <h1>Admin Center</h1>
            <table style={{ width: "100%", height: "100%" }}>
              <thead>
                <tr className="adm_cell_hd ">
                  <th className="adm_cell_hd">Full Name</th>
                  <th className="adm_cell_hd">Email</th>
                  <th className="adm_cell_hd">Currency</th>
                  <th className="adm_cell_hd">Balance</th>
                  <th className="adm_cell_hd">Created At</th>
                </tr>
              </thead>
              <tbody style={{ width: "100%", height: "100%" }}>
                {allUsers?.map((user, key) => {
                  if (!user?.admin)
                    return (
                      <>
                        <tr
                          key={key}
                          className="adm_col"
                          onClick={() => handlePop(user?.email)}
                        >
                          <td className="adm_cell">
                            <p>{user?.fullName}</p>
                          </td>
                          <td className="adm_cell">
                            <p>{user?.email}</p>
                          </td>

                          <td className="adm_cell">
                            <p>{user?.currency}</p>
                          </td>
                          <td className="adm_cell">
                            <p>${user?.amount}</p>
                          </td>
                          <td className="adm_cell">
                            <p>
                              {new Date(user?.createdAt).toLocaleDateString()}
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                })}
              </tbody>
              {u1 && <EditUser setU1={setU1} userEmail={clientEmail} />}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
