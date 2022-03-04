import React from "react";
import Card from "../../components/global/Card";
import Sidebar from "../../components/global/Sidebar";

type Props = {};

const Admission = (props: Props) => {
  return (
    <Sidebar>
      <div className=" py-5">
        <h1 className="text-lg font-medium md:text-2xl">Admissions</h1>
        <p>Select your class and add a student.</p>
      </div>
      <Card addNewCard={true} route={"admissions"} />
    </Sidebar>
  );
};

export default Admission;
