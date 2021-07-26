import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
	<React.StrictMode>
		<GlobalStyled />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
