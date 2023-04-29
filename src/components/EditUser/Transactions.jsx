import axios from "axios";
import "./Overview.css";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const Transactions = ({ userEmail }) => {
  console.log("transa", userEmail);
  const [cookies, setCookie] = useCookies(["user"]);
  const [history, setHistory] = useState(null);

  const getTrans = async () => {
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/admin/getHistory/",
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
        setHistory(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Form data");
  };

  useEffect(() => {
    if (!history) {
      getTrans();
    }
    console.log(history?.length);
  });
  return (
    <div className="transac_section">
      <div className="tranc_card">
        {history?.length > 0 ? (
          history.map((hist, key) => (
            <table key={key} className="tranc_table">
              <thead>
                <th>Transaction Date</th>
                <th>Amount</th>
                <th>Type</th>
              </thead>

              <tbody>
                <tr>
                  <td>{new Date(hist?.createdAt).toLocaleDateString()}</td>
                  <td>{hist?.received}</td>
                  <td>{hist?.type}</td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <div className="no_tran">
            <h2>No History</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
