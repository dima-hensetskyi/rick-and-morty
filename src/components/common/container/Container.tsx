import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { FetchData } from '../../../redux/actions/appActions';
import { AppStateType } from '../../../redux/reducers/rootReducer';
import { CharactersList } from '../../Characters/CharactersList';
import { EpisodesList } from '../../Episodes/EpisodesList';
import { LocationsList } from '../../Locations/LocationsList';
import { PaginationComponent } from '../Pagination/Pagination';
import { PreLoader } from '../Preloader/Preloader';

interface MainContainerComponentProps {
	count: number;
	totalPages: number;
	type: string;
}

export const MainContainer: React.FC<MainContainerComponentProps> = ({
	count,
	totalPages,
	type,
}) => {
	const [activePage, setActivePage] = useState(1);
	const dispatch = useDispatch();
	const loading = useSelector((state: AppStateType) => state.app.loading);
	const filterTypes = useSelector(
		(state: AppStateType) => state.app.filterTypes
	);

	useEffect(() => {
		dispatch(FetchData(type, activePage, filterTypes));
	}, []);

	const onPageChange = (page: number) => {
		setActivePage(page);
		dispatch(FetchData(type, page, filterTypes));
	};

	if (!totalPages || loading) {
		return <PreLoader />;
	}

	return (
		<Container className="d-flex flex-column align-items-center">
			<PaginationComponent
				count={count}
				totalPages={totalPages}
				onPageChange={onPageChange}
				activePage={activePage}
				type={type}
			/>
			{type === 'characters' && <CharactersList />}
			{type === 'episodes' && <EpisodesList />}
			{type === 'locations' && <LocationsList />}
		</Container>
	);
};
