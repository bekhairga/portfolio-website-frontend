import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ title }) => {
	return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

const PrimaryButtonStyled = styled.a`
	background-color: var(--primary-color);
	padding: 1rem 2.5rem;
	color: var(--white-color);
	cursor: pointer;
	display: inline-block;
	font-size: inherit;
	text-transform: uppercase;
	position: relative;
	transition: all 0.4s ease-in-out;
	&:after {
		content: '';
		position: absolute;
		width: 0%;
		height: 0.2rem;
		background-color: var(--white-color);
		left: 0;
		bottom: 0;
		transition: all 0.4s ease-in-out;
		opacity: 0.7;
	}
	&:hover::after {
		width: 100%;
	}
`;

export default PrimaryButton;
