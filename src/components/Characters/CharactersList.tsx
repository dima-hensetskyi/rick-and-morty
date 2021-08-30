import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { setModalData, setModalShow } from '../../redux/actions/appActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import { ITCharacter } from '../../types/interfaces';
import { Widgets } from '../common/widgets/Widgets ';

export const CharactersList: React.FC = () => {
	const characters = useSelector(
		(state: AppStateType) => state.charactersPage.characters
	);

	const dispatch = useDispatch();

	const charactersFiltersData = {
		Gender: ['Male', 'Female', 'Genderless'],
		Status: ['Alive', 'Dead', 'Unknown'],
		Species: ['Human', 'Alien', 'Unknown'],
	};

	const onClickHandler = (character: ITCharacter) => {
		dispatch(setModalData(character));
		dispatch(setModalShow(true));
	};

	return (
		<Container>
			<Row>
				<Col className="col-12 col-md-3">
					<Widgets type="characters" data={charactersFiltersData} />
				</Col>
				<Col className="col-12 col-md-9">
					<Row>
						{characters.map((character) => (
							<Col
								className="col-12 col-sm-6 col-md-4 mb-4"
								onClick={() => onClickHandler(character)}
								key={character.name}
							>
								<Card id={`${character.id}`} className="shadow-sm character">
									<Card.Img variant="top" src={character.image} className="card-image" />
									<Card.Body>
										<Card.Title className="text-center my-2">{character.name}</Card.Title>
										<Card.Text className="d-flex align-items-center justify-content-between">
											<span>
												<i className="fas fa-venus-mars pr-3"></i>
												<span> {character.gender}</span>
											</span>
											<span>
												<i className="fas fa-users pr-3"></i>
												<span> {character.species}</span>
											</span>
											<span>
												<i className="far fa-user pr-3"></i>
												<span> {character.status}</span>
											</span>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
