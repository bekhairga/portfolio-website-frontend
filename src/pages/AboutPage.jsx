import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/ServicesSection';
import ReviewsSection from './../components/ReviewsSection';
const About = () => {
	return (
		<MainLayout>
			<AboutStyled>
				<Title title='About me' span='About me' />
				<ImageSection />
				<ServicesSection />
				<ReviewsSection />
			</AboutStyled>
		</MainLayout>
	);
};

const AboutStyled = styled.section``;

export default About;
