import React from 'react';
import styled from 'styled-components';
import blogs from '../data/blogs';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from './../styles/Layouts';
const Blog = () => {
	return (
		<MainLayout>
			<BlogStyled>
				<Title title='blog' span='blog' />
				<InnerLayout className='blog'>
					{blogs.map((blog) => (
						<div key={blog.id} className='blog-item'>
							<div className='image'>
								<img src={blog.image} alt={blog.title} />
							</div>
							<div className='title'>
								<a href={blog.link}>{blog.title}</a>
							</div>
						</div>
					))}
				</InnerLayout>
			</BlogStyled>
		</MainLayout>
	);
};
const BlogStyled = styled.div`
	.blog {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 2rem;
		grid-row-gap: 3rem;
		.blog-item {
			background-color: var(--background-dark-color-grey);
			padding: 1rem 1rem;
			overflow: hidden;
		}
		.image {
			width: 100%;
			padding-bottom: 0.5rem;
			overflow: hidden;
			img {
				width: 100%;
				height: 90%;
				object-fit: cover;
				transition: all 0.4s ease-in-out;
				&:hover {
					cursor: pointer;
					transform: rotate(5deg) scale(1.1);
				}
			}
		}
		.title {
			a {
				font-size: 1.8rem;
				padding: 0.5rem 0rem;
				color: var(--white-color);
				cursor: pointer;
				transition: all 0.4s ease-in-out;
				&:hover {
					color: var(--primary-color);
				}
			}
		}
	}
`;
export default Blog;
