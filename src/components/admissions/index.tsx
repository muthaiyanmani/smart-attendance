import React from "react";
import Card from "./card";

type Props = {};

const Admission = (props: Props) => {
  return (
    <div>
      <div className=" py-5">
        <h1 className="text-lg md:text-2xl">Admissions</h1>
        <p>Select your class and add a student.</p>
      </div>
      <Card addNewCard={true} route={"admissions"} />
    </div>
  );
};

export default Admission;
