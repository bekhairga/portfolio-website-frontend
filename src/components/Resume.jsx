import React from "react";
import { InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

const Resume = () => {
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle
            icon={<BusinessCenterIcon />}
            title={"Working Experience"}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Inha University in Tashkent"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi eaque exercitationem fuga fugit illo in minima perferendis repudiandae sint."
            }
          />
          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Inha University in Tashkent"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi eaque exercitationem fuga fugit illo in minima perferendis repudiandae sint."
            }
          />
          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Inha University in Tashkent"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi eaque exercitationem fuga fugit illo in minima perferendis repudiandae sint."
            }
          />
        </div>
        <div className="small-title">
          <SmallTitle icon={<SchoolIcon />} title={"Education"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Inha University in Tashkent"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi eaque exercitationem fuga fugit illo in minima perferendis repudiandae sint."
            }
          />
          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Inha University in Tashkent"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi eaque exercitationem fuga fugit illo in minima perferendis repudiandae sint."
            }
          />
          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Inha University in Tashkent"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi eaque exercitationem fuga fugit illo in minima perferendis repudiandae sint."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
