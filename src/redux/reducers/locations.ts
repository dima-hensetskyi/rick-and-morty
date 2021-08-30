import { ActionsTypesLocations } from './../actions/actionsTypes';
import { ITLocations, ITInformation } from './../../types/interfaces';
import { FETCH_LOCATIONS, SET_INFORMATION_LOCATIONS } from '../types';

const initialState = {
	locations: [] as ITLocations[],
	info: {} as ITInformation,
};

type InitialState = typeof initialState;

export const locationsPageReducer = (
	state = initialState,
	action: ActionsTypesLocations
): InitialState => {
	switch (action.type) {
		case FETCH_LOCATIONS:
			return { ...state, locations: action.locations };
		case SET_INFORMATION_LOCATIONS:
			return { ...state, info: action.information };
		default:
			return state;
	}
};
