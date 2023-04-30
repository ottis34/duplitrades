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
    <div className={history?.length > 0 ? 'transac_section' : 'no_transac_section'}>
      <div className="tranc_card">
            <table className="tranc_tab">
              <thead>
                <tr>
                  <th>Transaction Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>

              {history?.length > 0 ? (
                history.map((hist, key) => (
              <tbody  key={key} >
                <tr className="body_td">
                  <td className={ `${hist?.type}` == "Deposit" ? "credit_tranc" : "debit_tranc" }>{new Date(hist?.createdAt).toLocaleDateString()}</td>
                  <td className={ `${hist?.type}` == "Deposit" ? "credit_tranc" : "debit_tranc" }><span>$</span>{hist?.received}</td>
                  <td className={ `${hist?.type}` == "Deposit" ? "credit_tranc" : " debit_tranc" }>{hist?.type}</td>
                </tr>
              </tbody>
                ))
              ) : (
                <div className="no_tran">
                  <div>No history!</div>
                </div>
              )}
            </table>

      </div>
    </div>
  );
};

export default Transactions;
