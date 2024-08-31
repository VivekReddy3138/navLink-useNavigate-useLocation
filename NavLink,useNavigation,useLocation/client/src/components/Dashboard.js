import React from "react";
import TopNavigation from "./TopNavigation";
import { useLocation } from "react-router-dom";

function Dashboard() {
  let locObj = useLocation();
  console.log(locObj);

  return (
    <div>
      <TopNavigation />
      <h2>Dashboard</h2>
      <h2>
        Message:
        {locObj && locObj.state && locObj.state.msg
          ? locObj.state.msg
          : "Hi,welcome"}
      </h2>
    </div>
  );
}

export default Dashboard;
