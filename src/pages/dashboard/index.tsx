import React from "react";
import DashboardComponent from "../../components/dashboard/pieChart";
import Sidebar from "../../components/global/sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Sidebar>
      <DashboardComponent />
    </Sidebar>
  );
};

export default Dashboard;
