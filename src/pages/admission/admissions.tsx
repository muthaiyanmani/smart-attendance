import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Admission from "../../components/admissions/index";

type Props = {};

const Admissions = (props: Props) => {
  return (
    <Sidebar>
      <Admission />
    </Sidebar>
  );
};

export default Admissions;
