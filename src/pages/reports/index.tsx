import React from "react";
import Card from "../../components/global/Card";
import Sidebar from "../../components/global/Sidebar";

type Props = {};

const Reports = (props: Props) => {
  return (
    <Sidebar>
      <div>
        <div className=" py-5">
          <h1 className="text-lg font-medium md:text-2xl">Reports</h1>
          <p>Select your class and mark the attendance.</p>
        </div>
        <Card route={"reports"} />
      </div>
    </Sidebar>
  );
};

export default Reports;
