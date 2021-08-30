import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../img/logo.svg';
import logo2 from '../../img/logo2.svg';

export const NavBar: React.FC = () => {
	return (
		<Navbar bg="light" expand="lg" className="py-0">
			<Container>
				<Navbar.Brand href="/" className="d-flex align-items-center">
					<img src={logo} className="logo" alt="Logo" />
					<h5 className="m-0 mx-3">Rick and Morty</h5>
					<img src={logo2} className="logo" alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="mx-5">
					<Nav className="ms-auto">
						<NavLink
							className="mx-3 app-link"
							activeClassName="active-link"
							to="/characters-list"
						>
							Characters
						</NavLink>
						<NavLink
							className="mx-3 app-link"
							activeClassName="active-link"
							to="/episodes"
						>
							Episodes
						</NavLink>
						<NavLink
							className="mx-3 app-link"
							activeClassName="active-link"
							to="/locations"
						>
							Locations
						</NavLink>
						<NavLink
							className="mx-3 app-link"
							activeClassName="active-link"
							to="/my-watch-list"
						>
							My watch list
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
