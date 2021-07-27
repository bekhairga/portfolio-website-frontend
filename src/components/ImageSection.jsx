import React from 'react';
import styled from 'styled-components';
import resume from '../img/4.jpg';
import PrimaryButton from './PrimaryButton';

const ImageSection = () => {
	return (
		<ImageSectionStyled>
			<div className='left-content'>
				<img src={resume} alt='resume' />
			</div>
			<div className='right-content'>
				<h4>
					I am <span>Lorem ipsum dolor sit.</span>
				</h4>
				<p className='paragraph'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
					cum unde ullam enim corrupti exercitationem excepturi fuga nemo!
					Pariatur velit consequuntur provident minima dolorem ducimus mollitia
					optio, dicta totam laboriosam saepe explicabo aperiam.
				</p>
				<div className='about-info'>
					<div className='info-title'>
						<p>Full Name</p>
						<p>Age</p>
						<p>Nationality</p>
						<p>Languages</p>
						<p>Work</p>
						<p>Location</p>
						<p>Service</p>
					</div>
					<div className='info'>
						<p>: BekhaIrga</p>
						<p>: 33</p>
						<p>: Uzbek</p>
						<p>: English, Russian, Uzbek</p>
						<p>: FullStack Developer</p>
						<p>: Tashkent, Uzbekistan</p>
						<p>: Freelance</p>
					</div>
				</div>
				<PrimaryButton title='Download CV' />
			</div>
		</ImageSectionStyled>
	);
};

const ImageSectionStyled = styled.div`
	margin-top: 5rem;
	display: flex;
	.left-content {
		width: 100%;
		img {
			width: 90%;
			object-fit: cover;
		}
	}
	.right-content {
		h4 {
			font-size: 2rem;
			color: var(--white-color);
			span {
				font-size: inherit;
				color: inherit;
			}
		}
		.paragraph {
			padding: 1rem 0;
		}
		.about-info {
			display: flex;
			padding-bottom: 1.4rem;
			.info-title {
				padding-right: 3rem;
				p {
					font-weight: 600;
				}
			}
			.info-title,
			.info {
				p {
					padding: 0.3rem 0;
				}
			}
		}
	}
`;

export default ImageSection;
