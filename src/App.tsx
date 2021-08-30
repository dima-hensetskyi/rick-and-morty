import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { ModalWindow } from './components/common/Modal/Modal';
import { NavBar } from './components/NavBar/NavBar';
import { Alerts } from './components/common/alerts/Alert';
import { Routes } from './Routes';

import './App.css';

const App: React.FC = () => {
	return (
		<Container className="f-height bg-light px-0" fluid>
			<BrowserRouter>
				<NavBar />
				<Alerts />
				<Routes />
				<ModalWindow />
			</BrowserRouter>
		</Container>
	);
};

export default App;
