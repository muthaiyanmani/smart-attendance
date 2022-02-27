import React from "react";
import DashboardComponent from "../../components/dashboard/pieChart";
import Sidebar from "../../components/global/sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Sidebar>
      <div className="mt-5 flex justify-center">
        <DashboardComponent />
      </div>
    </Sidebar>
  );
};

export default Dashboard;
