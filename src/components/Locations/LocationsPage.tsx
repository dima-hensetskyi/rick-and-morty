import React from 'react';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../redux/reducers/rootReducer';
import { MainContainer } from '../common/container/Container';

export const LocationsPage: React.FC = () => {
	const totalPages = useSelector(
		(state: AppStateType) => state.locationsPage.info.pages
	);
	const count = useSelector(
		(state: AppStateType) => state.locationsPage.info.count
	);

	return (
		<MainContainer totalPages={totalPages} count={count} type="locations" />
	);
};
