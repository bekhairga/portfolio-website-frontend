import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';
import Title from './Title';
const ReviewsSection = () => {
	return (
		<ReviewsSectionStyled>
			<Title title='reviews' span='reviews' />
			<InnerLayout>
				<div className='reviews'>
					<ReviewItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, veritatis?' />
					<ReviewItem text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, veritatis? Something is being waited' />
				</div>
			</InnerLayout>
		</ReviewsSectionStyled>
	);
};
const ReviewsSectionStyled = styled.div`
	.reviews {
		display: flex;
	}
`;
export default ReviewsSection;
