import React from 'react';
import { Modal, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { setModalShow } from '../../../redux/actions/appActions';
import { AppStateType } from '../../../redux/reducers/rootReducer';
import { getCorrectDate } from '../../../utils/getCorrectDate';

export const ModalWindow: React.FC = () => {
	const show = useSelector((state: AppStateType) => state.app.modalShow);
	const data = useSelector((state: AppStateType) => state.app.modalData);
	const prettyDate = getCorrectDate(data.created);

	const dispatch = useDispatch();

	const handleClose = () => dispatch(setModalShow(false));
	return (
		<Modal show={show} size="lg" onHide={handleClose} animation={true}>
			<Modal.Header closeButton>
				<Modal.Title>{data.name}</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Row>
					<Col className="col-12 col-md-6 col-lg-5">
						<img src={data.image} alt={data.name} className="card-image" />
					</Col>
					<Col>
						<ListGroup variant="flush">
							<ListGroup.Item>Species: {data.species}</ListGroup.Item>
							<ListGroup.Item>Gender: {data.gender}</ListGroup.Item>
							<ListGroup.Item>Status: {data.status}</ListGroup.Item>
							<ListGroup.Item>Created: {prettyDate}</ListGroup.Item>
							<ListGroup.Item>Location: {data.location?.name}</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
