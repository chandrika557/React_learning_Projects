import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      {/* links to child routes */}
      <nav>
        <ul>
        <li>
            <Link to="Settings">Settings</Link> 
        </li>
        <li>
            <Link to="Profile">Profile</Link> 
        </li> 
        </ul> 
           
      </nav>

      {/* child route renders here */}
      <Outlet />
    </>
  );
}

export default Dashboard;

