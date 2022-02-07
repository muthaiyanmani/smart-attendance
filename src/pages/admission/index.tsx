import React from "react";
import Card from "../../components/global/card";
import Sidebar from "../../components/global/sidebar";

type Props = {};

const Admission = (props: Props) => {
  return (
    <Sidebar>
      <div className=" py-5">
        <h1 className="text-lg md:text-2xl">Admissions</h1>
        <p>Select your class and add a student.</p>
      </div>
      <Card addNewCard={true} route={"admissions"} />
    </Sidebar>
  );
};

export default Admission;
