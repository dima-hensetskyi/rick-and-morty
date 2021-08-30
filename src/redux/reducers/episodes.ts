import { ActionsTypesEpisodes } from './../actions/actionsTypes';
import { ITEpisode, ITInformation } from './../../types/interfaces';
import { FETCH_EPISODES, SET_INFORMATION_EPISODES } from './../types';

const initialState = {
	episodes: [] as ITEpisode[],
	info: {} as ITInformation,
};

type InitialState = typeof initialState;

export const episodesPageReducer = (
	state = initialState,
	action: ActionsTypesEpisodes
): InitialState => {
	switch (action.type) {
		case FETCH_EPISODES:
			return { ...state, episodes: action.episodes };
		case SET_INFORMATION_EPISODES:
			return { ...state, info: action.information };
		default:
			return state;
	}
};
