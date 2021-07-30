import React from "react";
import styled from "styled-components";

const Button = ({ filter, buttons }) => {
  return (
    <ButtonsContainerStyled>
      {buttons.map((title, idx) => {
        return (
          <ButtonStyled key={idx} onClick={() => filter(title)}>
            {title}
          </ButtonStyled>
        );
      })}
    </ButtonsContainerStyled>
  );
};
const ButtonsContainerStyled = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-second);
  padding: 0.5rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:active,
  &:focus {
    background-color: var(--primary-color);
  }

  &:hover {
    background-color: var(--primary-color);
  }

  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;

export default Button;
