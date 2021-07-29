import React from "react";
import Skills from "../components/Skills";
import {MainLayout} from "../styles/Layouts";
import Resume from "../components/Resume";

const ResumePage = () => {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
