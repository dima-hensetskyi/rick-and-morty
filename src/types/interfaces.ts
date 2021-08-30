import { string } from './../../../../$RECYCLE.BIN/S-1-5-21-1235593670-3425964674-1055392547-1001/$RSUV9FW/@types/prop-types/index.d';
export interface IToDo {
	title: string;
	id: number;
	completed: boolean;
}

type originLocationType = {
	name: string;
	url: string;
};

export interface ITCharacter {
	url: string;
	type: string;
	status: string;
	species: string;
	name: string;
	image: string;
	id: number;
	gender: string;
	created: string;
	origin: originLocationType;
	location: originLocationType;
	episode: string[];
}

export interface ITEpisode {
	air_date: string;
	created: string;
	episode: string;
	id: number;
	name: 'sting';
	url: 'string';
	characters: string[];
}

export interface ITLocations {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: string;
}

export interface ITInformation {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface ITWatchListItem {
	title: string;
	id: number;
	completed: boolean;
}
