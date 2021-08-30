import { filterType } from '../redux/actions/actionsTypes';

type methods = 'GET' | 'PUT' | 'POST' | 'DELETE';

const baseURL = 'https://rickandmortyapi.com/api';

export const request = async (
	url: string,
	method: methods = 'GET',
	body: string | null = null
) => {
	try {
		if (body) {
			body = JSON.stringify(body);
		}
		const resp = await fetch(`${baseURL}/${url}`, {
			method,
			body,
		});
		const data = await resp.json();

		if (!resp.ok) {
			return data || 'Something went wrong ';
		}
		return data;
	} catch (e) {
		return e;
	}
};

export const API = {
	async getData(
		type: string,
		page: number = 1,
		filters?: {
			filter: string;
			value: string;
		}[],
		filterInputs?: filterType
	) {
		let filtersUrl = `${
			filters
				? filters
						.map(
							(filter) =>
								`&${filter.filter.toLowerCase()}=${filter.value.toLowerCase()}`
						)
						.join('')
				: ''
		}`;

		if (filterInputs) {
			for (let key in filterInputs) {
				if (filterInputs[key]) {
					filtersUrl += `&${key.toLowerCase()}=${filterInputs[key]}`;
				}
			}
		}

		switch (type) {
			case 'characters':
				return await request(`character?page=${page}${filtersUrl}`, 'GET');
			case 'episodes':
				return await request(`episode?page=${page}${filtersUrl}`, 'GET');
			case 'locations':
				return await request(`location?page=${page}${filtersUrl}`, 'GET');
			default:
				break;
		}
	},
};
