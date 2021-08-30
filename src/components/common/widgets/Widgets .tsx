import React, { useState } from 'react';
import { Card, Collapse, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
	FetchData,
	setFilterInput,
	setFilterTypes,
} from '../../../redux/actions/appActions';
import { AppStateType } from '../../../redux/reducers/rootReducer';

type charactersFiltersDataTypes = {
	Gender: string[];
	Status: string[];
	Species: string[];
};

type episodesFiltersDataType = {
	name: string;
	episode: string;
};

type locationsFiltersDataType = {
	name: string;
	type: string;
	dimension: string;
};

interface WidgetsProps {
	type: string;
	data:
		| charactersFiltersDataTypes
		| episodesFiltersDataType
		| locationsFiltersDataType;
}

export const Widgets: React.FC<WidgetsProps> = React.memo(({ type, data }) => {
	const [open, setOpen] = useState(true);

	const dispatch = useDispatch();

	const filterTypes = useSelector(
		(state: AppStateType) => state.app.filterTypes
	);
	const filterInputs = useSelector(
		(state: AppStateType) => state.app.filterInputs
	);

	const filtersTitles = Object.keys(data) as (keyof typeof data)[];

	const onFilter = (
		e: React.ChangeEvent<HTMLInputElement>,
		label: string,
		filter: string
	) => {
		const includeFilter = filterTypes.some((filter) => filter.value === label);
		let types = filterTypes;

		if (!includeFilter) {
			dispatch(setFilterTypes(filter, label, true));
			types = [...filterTypes, { filter, value: label }];
		} else {
			dispatch(setFilterTypes(filter, label, false));
			types = filterTypes.filter((filter) => filter.value !== label);
		}

		dispatch(FetchData(type, undefined, types));
	};

	const onSearchChange = (label: string, filter: string) => {
		dispatch(setFilterInput(filter, label));
	};

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			dispatch(FetchData(type, undefined, undefined, filterInputs));
		}
	};

	return (
		<>
			{type === 'characters' &&
				filtersTitles.map((filter) => (
					<Card className="my-1 shadow-sm" key={filter}>
						<Card.Header className="d-flex justify-content-between">
							<h6>{filter}</h6>
							<span className="ml-auto" id={filter} onClick={(e) => setOpen(!open)}>
								<i className="fas fa-chevron-down"></i>
							</span>
						</Card.Header>
						<Collapse in={open} className="collapse">
							<Card.Body className="widget-content">
								{data[filter].map((label: string) => (
									<Form.Check
										checked={filterTypes.some((filter) => filter.value === label)}
										key={label}
										type="checkbox"
										label={label}
										onChange={(e) => {
											onFilter(e, label, filter);
										}}
									/>
								))}
							</Card.Body>
						</Collapse>
					</Card>
				))}

			{type !== 'characters' &&
				filtersTitles.map((filter: string, i: number) => {
					return (
						<div key={i}>
							<Form.Label>{`Filter by ${filter.toLowerCase()}:`}</Form.Label>
							<Card className="mb-3 shadow-sm">
								<InputGroup>
									<InputGroup.Text
										onClick={() =>
											dispatch(FetchData(type, undefined, undefined, filterInputs))
										}
									>
										<i
											className={`fas ${
												filter === 'name' ? 'fa-filter' : 'fa-search'
											} i-btn`}
										></i>
									</InputGroup.Text>
									<FormControl
										value={filterInputs[filter]}
										onChange={(e) => onSearchChange(e.target.value, filter)}
										placeholder={`Enter ${filter.toLowerCase()}`}
										onKeyPress={keyPressHandler}
									/>
								</InputGroup>
							</Card>
						</div>
					);
				})}
		</>
	);
});
