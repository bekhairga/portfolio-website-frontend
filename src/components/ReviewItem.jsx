import React from 'react';
import styled from 'styled-components';
const ReviewItem = ({ text }) => {
	return (
		<ReviewItemStyled>
			<p>{text}</p>
		</ReviewItemStyled>
	);
};

const ReviewItemStyled = styled.div`
	width: 50%;
	padding: 2rem 1rem;
	border-left: 6px solid var(--border-color);
	background-color: var(--background-dark-color-grey);
	position: relative;
	&:not(:first-child) {
		margin-left: 2rem;
	}
	&::after {
		content: '';
		position: absolute;
		left: 2rem;
		top: 100%;
		border-width: 0.8rem;
		border-style: solid;
		border-color: var(--background-dark-color-grey) transparent transparent
			var(--background-dark-color-grey);
	}
	p {
		padding: 1rem 0;
	}
`;

export default ReviewItem;
