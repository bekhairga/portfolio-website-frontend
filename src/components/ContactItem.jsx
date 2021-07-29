import React from 'react';
import styled from 'styled-components';
const ContactItem = ({ icon, title, contact1, contact2 }) => {
	return (
		<ContactItemStyled>
			<div className='left-content'>
				<p>{icon}</p>
			</div>
			<div className='right-content'>
				<h6>{title}</h6>
				<p>{contact1}</p>
				<p>{contact2}</p>
			</div>
		</ContactItemStyled>
	);
};
const ContactItemStyled = styled.div`
	padding: 1.5rem 2rem;
	background-color: var(--background-dark-color-grey);
	display: flex;
	align-items: center;
	&:not(:last-child){
		margin-bottom: 2rem;
	}
	.left-content{
		padding: 1.5rem;
		border: 1px solid var(--border-color);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 1.5rem;
		svg{
			font-size: 2.3rem;
		}
	}
	.right-content{
		h6{
			color: var(--white-color);
			font-size: 1.2rem;
			padding-bottom: 0.6rem;
		}
		p{
			padding: 0.1rem 0;
		}
	}
`;
export default ContactItem;
