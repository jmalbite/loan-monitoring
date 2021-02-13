import React from "react";
import { useState, useEffect } from "react";
import "./dashboard.scss";
import StatusAmount from "../../components/status box/status-amount";

function Dashboard() {
  const [boardStatus, setBoardStatus] = useState();

  return (
    <>
      <div className="remaining-balance-box">
        <StatusAmount />
      </div>
    </>
  );
}

export default Dashboard;
