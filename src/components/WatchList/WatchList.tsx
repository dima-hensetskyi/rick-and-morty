import React from 'react';
import { Container, Form, ListGroup } from 'react-bootstrap';

import { ITWatchListItem } from '../../types/interfaces';

type WatchListProps = {
	toDos: ITWatchListItem[];
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
};

export const WatchList: React.FC<WatchListProps> = ({
	toDos,
	onRemove,
	onToggle,
}) => {
	if (!toDos.length) {
		return <h3 className="text-center my-4">You haven't planned anything yet.</h3>;
	}

	const removeHandler = (event: React.MouseEvent, id: number) => {
		event.preventDefault();
		onRemove(id);
	};

	return (
		<Container className="col-lg-6 mt-3">
			<ListGroup>
				{toDos.map((episode) => {
					const classes = ['todo', 'success'];
					if (episode.completed) {
						classes.push('completed');
					}
					return (
						<ListGroup.Item
							variant={episode.completed ? 'success' : ''}
							className={classes.join(' ')}
							key={episode.id}
						>
							<label>
								<Form.Check
									checked={episode.completed}
									onChange={onToggle.bind(null, episode.id)}
									className="my-1"
								/>
								<span>{episode.title}</span>
								<i
									className="fas fa-trash-alt"
									onClick={(event) => removeHandler(event, episode.id)}
								></i>
							</label>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</Container>
	);
};
