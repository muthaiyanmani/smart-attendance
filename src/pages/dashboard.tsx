import React from "react";
import DashboardComponent from "../components/dashboard/dashboard";
import Sidebar from "../components/sidebar/sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Sidebar>
      <DashboardComponent />
    </Sidebar>
  );
};

export default Dashboard;
