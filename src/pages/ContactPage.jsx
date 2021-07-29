import React from 'react';
import { MainLayout, InnerLayout } from './../styles/Layouts';
import Title from '../components/Title';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import ContactItem from "../components/ContactItem";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const ContactPage = () => {
	return (
		<MainLayout>
			<Title title='Contact' span='contact' />
			<ContactPageStyled>
				<InnerLayout className='contact-section'>
					<div className='left-content'>
						<div className='contact-title'>
							<h4>Get In Touch</h4>
						</div>
						<form className='form'>
							<div className='form-field'>
								<label htmlFor='name'>Enter your name: </label>
								<input type='text' id='name' />
							</div>
							<div className='form-field'>
								<label htmlFor='email'>Enter your email: </label>
								<input type='email' id='email' />
							</div>
							<div className='form-field'>
								<label htmlFor='name'>Enter your subject: </label>
								<input type='text' id='subject' />
							</div>
							<div className='form-field'>
								<label htmlFor='textarea'>Enter your message</label>
								<textarea name='textarea' id='textarea'></textarea>
							</div>
							<div className='form-field'>
								<PrimaryButton title='Send Email' />
							</div>
						</form>
					</div>
					<div className='right-content'>
						<ContactItem title={'Phone'} icon={<PhoneIcon />} contact1={+998909477938} contact2={+998979477938} />
						<ContactItem title={'Email'} icon={<EmailIcon />} contact1={'irgashevbehzod@gmail.com'} contact2={'kinglyklaun@gmail.com'} />
						<ContactItem title={'Location'} icon={<LocationOnIcon />} contact1={'Uzbekistan'} contact2={'Tashkent'} />
					</div>
				</InnerLayout>
			</ContactPageStyled>
		</MainLayout>
	);
};
const ContactPageStyled = styled.section`
	.contact-section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 2rem;
		.contact-title {
			h4 {
				color: var(--white-color);
				padding: 1rem 0;
				font-size: 1.8rem;
			}
		}
		.form {
			width: 100%;
			.form-field {
				margin-top: 2rem;
				position: relative;
				width: 100%;
				label {
					position: absolute;
					left: 20px;
					top: -20px;
					display: inline-block;
					background-color: var(--background-dark-color);
					padding: 0 0.5rem;
				}
				input {
					border: 1px solid var(--border-color);
					outline: none;
					background: transparent;
					height: 50px;
					padding: 0 15px;
					width: 100%;
					color: inherit;
				}
				textarea {
					background: transparent;
					border: 1px solid var(--border-color);
					outline: none;
					color: inherit;
					width: 100%;
					height: 35vh;
					padding: 0.8rem 1rem;
				}
			}
		}
	}
`;
export default ContactPage;
