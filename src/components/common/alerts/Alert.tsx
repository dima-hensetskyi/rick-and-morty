import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../../redux/reducers/rootReducer';

export const Alerts = () => {
	const alertData = useSelector((state: AppStateType) => state.app.alertData);
	const { show, type, text } = alertData;
	if (show) {
		return (
			<Alert variant={type} className="alert my-3">
				{text}!
			</Alert>
		);
	}
	return null;
};
