import { Switch, Route } from 'react-router';

import { CharactersPage } from './components/Characters/CharactersPage';
import { EpisodesPage } from './components/Episodes/EpisodesPage';
import { LocationsPage } from './components/Locations/LocationsPage';
import { MyWatchListPage } from './components/WatchList/MyWatchListPage';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={CharactersPage} />
			<Route path="/characters-list" component={CharactersPage} />
			<Route path="/episodes" component={EpisodesPage} />
			<Route path="/locations" component={LocationsPage} />
			<Route path="/my-watch-list" component={MyWatchListPage} />
		</Switch>
	);
};
