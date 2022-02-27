import React from "react";
import Card from "../../components/global/card";

import Sidebar from "../../components/global/sidebar";

type Props = {};

const Classroom = (props: Props) => {
  return (
    <Sidebar>
      <div>
        <div className=" py-5">
          <h1 className="text-lg font-medium md:text-2xl">Attendance</h1>
          <p>Select your class and mark the attendance.</p>
        </div>
        <Card route={"classroom"} />
      </div>
    </Sidebar>
  );
};

export default Classroom;
