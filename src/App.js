import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

const App = () => {
	return (
		<AppStyled>
			<Sidebar />
			<MainContentStyled>
				<div className='lines'>
					<div className='line-1'></div>
					<div className='line-2'></div>
					<div className='line-3'></div>
					<div className='line-4'></div>
				</div>
				<Switch>
					<Route path='/' component={HomePage} exact />
					<Route path='/about' component={AboutPage} exact />
					<Route path='/blogs' component={BlogsPage} exact />
					<Route path='/portfolios' component={PortfoliosPage} exact />
					<Route path='/resume' component={ResumePage} exact />
					<Route path='/contact' component={ContactPage} exact />
				</Switch>
			</MainContentStyled>
		</AppStyled>
	);
};

const MainContentStyled = styled.main`
	position: relative;
	margin-left: 16.3rem;
	min-height: 100vh;

	.lines {
		position: absolute;
		min-height: 100vh;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		z-index: -1;
		.line-1,
		.line-2,
		.line-3,
		.line-4 {
			width: 1px;
			min-height: 100vh;
			background-color: var(--border-color);
		}
	}
`;
const AppStyled = styled.div``;
export default App;
