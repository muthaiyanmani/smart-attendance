import React from "react";
import DashboardComponent from "../../components/pages/dashboard/PieChart";
import Sidebar from "../../components/global/Sidebar";
import Alert from "../../components/global/Alert";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Sidebar>
      <div className="mt-5 flex justify-center">
        <DashboardComponent />
        {/* <br />
        <Alert
          title="Success"
          description="Sucessfully submitted"
          status="FAIL"
        /> */}
      </div>
    </Sidebar>
  );
};

export default Dashboard;
