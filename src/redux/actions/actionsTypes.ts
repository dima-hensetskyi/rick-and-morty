import { Dispatch } from 'redux';

import {
	ITCharacter,
	ITInformation,
	ITEpisode,
	ITLocations,
} from './../../types/interfaces';
import {
	FETCH_CHARACTERS,
	SET_INFORMATION_CHARACTERS,
	FETCH_EPISODES,
	SET_INFORMATION_EPISODES,
	FETCH_LOCATIONS,
	SET_INFORMATION_LOCATIONS,
	SET_LOADING,
	SET_MODAL_SHOW,
	SET_MODAL_DATA,
	SET_FILTER_TYPES,
	SET_FILTER_INPUT,
	SET_SHOW_ALERT,
} from './../types';

type FetchCharactersAT = {
	type: typeof FETCH_CHARACTERS;
	characters: ITCharacter[];
};
type SetInformationCharactersAT = {
	type: typeof SET_INFORMATION_CHARACTERS;
	information: ITInformation;
};

type FetchEpisodesAT = {
	type: typeof FETCH_EPISODES;
	episodes: ITEpisode[];
};

type SetInformationEpisodesAT = {
	type: typeof SET_INFORMATION_EPISODES;
	information: ITInformation;
};

type FetchLocationsAT = {
	type: typeof FETCH_LOCATIONS;
	locations: ITLocations[];
};

type SetInformationLocationsAT = {
	type: typeof SET_INFORMATION_LOCATIONS;
	information: ITInformation;
};

type SetLoadingAT = {
	type: typeof SET_LOADING;
	payload: boolean;
};

type setModalShowAT = {
	type: typeof SET_MODAL_SHOW;
	payload: boolean;
};

type setModalData = {
	type: typeof SET_MODAL_DATA;
	data: ITCharacter;
};

export type filterType = {
	[key: string]: string;
};

type SetFilterTypes = {
	type: typeof SET_FILTER_TYPES;
	filter: string;
	value: string;
	checked: boolean;
};
type SetInputTypes = {
	type: typeof SET_FILTER_INPUT;
	inputs: string;
	filter: string;
};
type setShowAlertType = {
	type: typeof SET_SHOW_ALERT;
	value: {
		type: string;
		text: string;
		show: boolean;
	};
};

export type ActionsTypesEpisodes = FetchEpisodesAT | SetInformationEpisodesAT;

export type ActionsTypesAPP =
	| SetLoadingAT
	| setModalShowAT
	| setModalData
	| SetFilterTypes
	| SetInputTypes
	| setShowAlertType;

export type ActionsTypesCharacters =
	| FetchCharactersAT
	| SetInformationCharactersAT;

export type ActionsTypesLocations =
	| FetchLocationsAT
	| SetInformationLocationsAT;

export type CurrentDispatchTypeGetData = Dispatch<
	| ActionsTypesCharacters
	| ActionsTypesEpisodes
	| ActionsTypesLocations
	| SetLoadingAT
	| SetFilterTypes
	| setShowAlertType
>;
