import React from 'react';

import './preloader.css';

export const PreLoader: React.FC = () => (
	<div className="d-flex w-100 vh-100 justify-content-center align-items-center">
		<div className="lds-hourglass"></div>
	</div>
);
