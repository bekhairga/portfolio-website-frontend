import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import design from '../img/design.svg';
import gameDev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';
import ServiceCard from './ServiceCard';
const ServicesSection = () => {
	return (
		<InnerLayout>
			<ServicesSectionStyled>
				<Title title='services' span='services' />
				<div className='services'>
					<ServiceCard
						image={design}
						title='Web Design'
						paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem, reprehenderit ut hic est asperiores. Fugiat mollitia totam non adipisci consequuntur, inventore eveniet alias.'
					/>
					<div className='mid-card'>
						<ServiceCard
							image={gameDev}
							title='Game Design'
							paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem, reprehenderit ut hic est asperiores. Fugiat mollitia totam non adipisci consequuntur, inventore eveniet alias.'
						/>
					</div>
					<ServiceCard
						image={intelligence}
						title='Soft Design'
						paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem, reprehenderit ut hic est asperiores. Fugiat mollitia totam non adipisci consequuntur, inventore eveniet alias.'
					/>
				</div>
			</ServicesSectionStyled>
		</InnerLayout>
	);
};

const ServicesSectionStyled = styled.section`
	.services {
		margin-top: 5rem;
		display: flex;
		justify-content: space-between;
		.mid-card {
			margin: 0 1.2rem;
		}
	}
`;

export default ServicesSection;
