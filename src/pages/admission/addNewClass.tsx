import React from "react";
import AddClass from "../../components/admissions/addClass";
import Sidebar from "../../components/sidebar/sidebar";

type Props = {};

const AddNewClass = (props: Props) => {
  return (
    <Sidebar>
      <AddClass />
    </Sidebar>
  );
};

export default AddNewClass;
