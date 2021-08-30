import { ITCharacter } from './../../types/interfaces';
import {
	FETCH_CHARACTERS,
	FETCH_EPISODES,
	FETCH_LOCATIONS,
	SET_FILTER_INPUT,
	SET_FILTER_TYPES,
	SET_INFORMATION_CHARACTERS,
	SET_INFORMATION_EPISODES,
	SET_INFORMATION_LOCATIONS,
	SET_LOADING,
	SET_MODAL_DATA,
	SET_MODAL_SHOW,
	SET_SHOW_ALERT,
} from './../types';
import { API } from './../../api/api';
import { CurrentDispatchTypeGetData, filterType } from './actionsTypes';

type filter = {
	filter: string;
	value: string;
};

export const FetchData =
	(type: string, page?: number, filters?: filter[], filterInputs?: filterType) =>
	async (dispatch: CurrentDispatchTypeGetData) => {
		const data = await API.getData(type, page, filters, filterInputs);
		const { results, info } = data;

		if (results && info) {
			dispatch({ type: SET_LOADING, payload: true });
			switch (type) {
				case 'characters':
					dispatch({ type: FETCH_CHARACTERS, characters: results });
					dispatch({ type: SET_INFORMATION_CHARACTERS, information: info });
					break;
				case 'episodes':
					dispatch({ type: FETCH_EPISODES, episodes: results });
					dispatch({ type: SET_INFORMATION_EPISODES, information: info });
					break;
				case 'locations':
					dispatch({ type: FETCH_LOCATIONS, locations: results });
					dispatch({ type: SET_INFORMATION_LOCATIONS, information: info });
					break;
				default:
					break;
			}
			dispatch({ type: SET_LOADING, payload: false });

			if (filters?.length || filterInputs?.length) {
				dispatch({
					type: SET_SHOW_ALERT,
					value: {
						show: true,
						type: 'success',
						text: `We have found ${info.count} results`,
					},
				});

				setTimeout(() => {
					dispatch({
						type: SET_SHOW_ALERT,
						value: { show: false, type: '', text: '' },
					});
				}, 6000);
			}
		} else {
			dispatch({
				type: SET_SHOW_ALERT,
				value: { show: true, type: 'danger', text: data.error },
			});

			setTimeout(() => {
				dispatch({
					type: SET_SHOW_ALERT,
					value: { show: false, type: '', text: '' },
				});
			}, 6000);
		}
	};

export const setModalShow = (value: boolean) => ({
	type: SET_MODAL_SHOW,
	payload: value,
});
export const setModalData = (value: ITCharacter) => ({
	type: SET_MODAL_DATA,
	data: value,
});

export const setFilterTypes = (
	filter: string,
	label: string,
	checked: boolean
) => ({ type: SET_FILTER_TYPES, filter, value: label, checked });

export const setFilterInput = (filter: string, inputs: string) => ({
	type: SET_FILTER_INPUT,
	filter,
	inputs,
});
