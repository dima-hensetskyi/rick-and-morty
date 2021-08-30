import React, { useRef } from 'react';
import { Container, Form, FormControl, InputGroup } from 'react-bootstrap';

interface WatchListFormProps {
	onAdd(title: string): void;
}

export const WatchListForm: React.FC<WatchListFormProps> = (props) => {
	const ref = useRef<HTMLInputElement>(null);

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.onAdd(ref.current!.value);
			ref.current!.value = '';
		}
	};

	return (
		<Container className="mt-3 col-lg-6">
			<Form.Label htmlFor="title">
				<h4>Enter an episode title:</h4>
			</Form.Label>
			<InputGroup size="lg">
				<InputGroup.Text>
					<i className="fas fa-list-alt"></i>
				</InputGroup.Text>
				<FormControl
					onKeyPress={keyPressHandler}
					ref={ref}
					type="text"
					id="title"
					placeholder="Enter an episode title"
				/>
			</InputGroup>
		</Container>
	);
};
