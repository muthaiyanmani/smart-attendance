import React from "react";
import AddStudent from "../../components/admissions/addStudent";
import Sidebar from "../../components/sidebar/sidebar";

type Props = {};

const AddNewStudent = (props: Props) => {
  return (
    <Sidebar>
      <AddStudent />
    </Sidebar>
  );
};

export default AddNewStudent;
