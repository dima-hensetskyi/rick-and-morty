import { ITCharacter } from './../../types/interfaces';
import { ActionsTypesAPP, filterType } from './../actions/actionsTypes';
import {
	SET_FILTER_INPUT,
	SET_FILTER_TYPES,
	SET_LOADING,
	SET_MODAL_DATA,
	SET_MODAL_SHOW,
	SET_SHOW_ALERT,
} from '../types';

const initialState = {
	loading: false,
	modalShow: false,
	modalData: {} as ITCharacter,
	filterTypes: [] as { filter: string; value: string }[],
	filterInputs: {
		name: '',
		episode: '',
	} as filterType,
	alertData: {} as {
		type: string;
		text: string;
		show: boolean;
	},
};

type InitialState = typeof initialState;

export const appReducer = (
	state = initialState,
	action: ActionsTypesAPP
): InitialState => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case SET_MODAL_SHOW:
			return { ...state, modalShow: action.payload };
		case SET_MODAL_DATA:
			return { ...state, modalData: action.data };
		case SET_FILTER_TYPES:
			const types = action.checked
				? [...state.filterTypes, { filter: action.filter, value: action.value }]
				: state.filterTypes.filter((filter) => filter.value !== action.value);
			return {
				...state,
				filterTypes: types,
			};
		case SET_FILTER_INPUT:
			return {
				...state,
				filterInputs: { ...state.filterInputs, [action.filter]: action.inputs },
			};
		case SET_SHOW_ALERT:
			return {
				...state,
				alertData: action.value,
			};
		default:
			return state;
	}
};
