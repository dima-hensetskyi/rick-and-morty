import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../redux/reducers/rootReducer';
import { getCorrectDate } from '../../utils/getCorrectDate';
import { Widgets } from '../common/widgets/Widgets ';

export const EpisodesList: React.FC = () => {
	const episodes = useSelector(
		(state: AppStateType) => state.episodesPage.episodes
	);

	const episodesFiltersData = {
		name: '',
		episode: '',
	};

	return (
		<Container>
			<Row>
				<Col className="col-12 col-md-3">
					<Widgets type="episodes" data={episodesFiltersData} />
				</Col>
				<Col className="col-12 col-md-9">
					<Table striped bordered hover className="shadow-sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Episode</th>
								<th>Air date</th>
							</tr>
						</thead>
						<tbody>
							{episodes.map((episode) => (
								<tr key={episode.id}>
									<td>{episode.id}</td>
									<td>{episode.name}</td>
									<td>{episode.episode}</td>
									<td>{getCorrectDate(episode.air_date)}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
};
