import { useContext, useEffect } from "react";
import Board from "../../components/Dashboard/Main/Board";
import "./Dashboard.css";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { setWidName } = useContext(UserContext);

  useEffect(() => {
    setWidName("market");
  });

  return (
    <>
      <Board />
    </>
  );
};

export default Dashboard;
