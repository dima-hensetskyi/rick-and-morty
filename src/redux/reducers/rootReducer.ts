import { combineReducers } from 'redux';
import { appReducer } from './app';

import { charactersPageReducer } from './characters';
import { episodesPageReducer } from './episodes';
import { locationsPageReducer } from './locations';

const rootReducer = combineReducers({
	charactersPage: charactersPageReducer,
	episodesPage: episodesPageReducer,
	locationsPage: locationsPageReducer,
	app: appReducer,
});
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export default rootReducer;
