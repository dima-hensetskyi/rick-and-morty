import { ActionsTypesCharacters } from './../actions/actionsTypes';
import { ITCharacter, ITInformation } from './../../types/interfaces';
import { FETCH_CHARACTERS, SET_INFORMATION_CHARACTERS } from '../types';

const initialState = {
	characters: [] as ITCharacter[],
	info: {} as ITInformation,
	charactersFilter: {
		Gender: ['Male', 'Female', 'Genderless'],
		Status: ['Alive', 'Dead', 'Unknown'],
		Species: ['Human', 'Alien', 'Unknown'],
	},
};

type InitialState = typeof initialState;

export const charactersPageReducer = (
	state = initialState,
	action: ActionsTypesCharacters
): InitialState => {
	switch (action.type) {
		case FETCH_CHARACTERS:
			return { ...state, characters: action.characters };
		case SET_INFORMATION_CHARACTERS:
			return { ...state, info: action.information };
		default:
			return state;
	}
};
