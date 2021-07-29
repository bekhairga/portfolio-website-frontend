import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <SkillsStyled>
      <MainLayout>
        <Title title="Resume" span="Resume" />
        <InnerLayout>
          <div className="skills">
            <ProgressBar title="HTML5" width="70%" text="70%" />
            <ProgressBar title="CSS3" width="80%" text="80%" />
            <ProgressBar title="JavaScript" width="80%" text="80%" />
            <ProgressBar title="NodeJS" width="60%" text="60%" />
            <ProgressBar title="ReactJS" width="90%" text="90%" />
            <ProgressBar title="Redux" width="85%" text="85%" />
          </div>
        </InnerLayout>
      </MainLayout>
    </SkillsStyled>
  );
};
const SkillsStyled = styled.section`
.skills{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 3rem;
}
`;
export default Skills;
