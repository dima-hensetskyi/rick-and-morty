import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../redux/reducers/rootReducer';
import { Widgets } from '../common/widgets/Widgets ';

export const LocationsList: React.FC = () => {
	const locations = useSelector(
		(state: AppStateType) => state.locationsPage.locations
	);

	const locationsFiltersData = {
		name: '',
		type: '',
		dimension: '',
	};

	return (
		<Container>
			<Row>
				<Col className="col-12 col-md-3">
					<Widgets type="locations" data={locationsFiltersData} />
				</Col>
				<Col className="col-12 col-md-9">
					<Table striped bordered hover className="shadow-sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Type</th>
								<th>Dimension</th>
							</tr>
						</thead>
						<tbody>
							{locations.map((location) => (
								<tr key={location.id}>
									<td>{location.id}</td>
									<td>{location.name}</td>
									<td>{location.type}</td>
									<td>{location.dimension}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
};
