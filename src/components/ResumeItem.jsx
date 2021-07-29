import React from "react";
import styled from "styled-components";

const ResumeItem = ({ year, title, subTitle, text }) => {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
};
const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child){
    padding-bottom: 3rem;
  }
  &:last-child{
    margin-bottom: 3rem;
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      left: -11px;
      top: 15px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
      padding-top: 10px;
    }
  }

  .right-content {
    padding-left: 3rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -40px;
      top: 25px;
      width: 3rem;
      background-color: var(--border-color);
      height: 2px;
    }

    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }

    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
  }
`;
export default ResumeItem;
