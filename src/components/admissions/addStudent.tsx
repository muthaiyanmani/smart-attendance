import React from "react";
import { useParams } from "react-router-dom";
import AddStudentForm from "./addStudentForm";

type Props = {};

const AddStudent = (props: Props) => {
  const params = useParams();

  return (
    <div>
      <AddStudentForm />
    </div>
  );
};

export default AddStudent;
