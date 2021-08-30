import React, { useEffect, useState } from 'react';

import { ITWatchListItem } from '../../types/interfaces';
import { WatchListForm } from './WatchListForm';
import { WatchList } from './WatchList';

declare var confirm: (question: string) => boolean;

export const MyWatchListPage: React.FC = () => {
	const [watchList, setWatchList] = useState<ITWatchListItem[]>([]);

	useEffect(() => {
		const saved = JSON.parse(
			localStorage.getItem('watchList') || '[]'
		) as ITWatchListItem[];
		setWatchList(saved);
	}, []);

	useEffect(() => {
		localStorage.setItem('watchList', JSON.stringify(watchList));
	}, [watchList]);

	const addHandler = (title: string) => {
		const newWatchListItem: ITWatchListItem = {
			title,
			id: Date.now(),
			completed: false,
		};
		setWatchList((prev) => [newWatchListItem, ...prev]);
	};

	const toggleHandler = (id: number) => {
		setWatchList(
			watchList.map((episode) => {
				if (episode.id === id) {
					episode.completed = !episode.completed;
				}
				return episode;
			})
		);
	};

	const removeHandler = (id: number) => {
		const shouldRemove = confirm('Are you sure you want to delete this episode?');
		if (shouldRemove) {
			setWatchList((prev) => prev.filter((episode) => episode.id !== id));
		}
	};
	return (
		<>
			<WatchListForm onAdd={addHandler} />
			<WatchList
				toDos={watchList}
				onRemove={removeHandler}
				onToggle={toggleHandler}
			/>
		</>
	);
};
