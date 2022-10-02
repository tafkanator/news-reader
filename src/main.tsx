import { Outlet, Router } from '@tanstack/react-location';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { location, routes } from 'src/router';

import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Router location={location} routes={routes}>
			<h1>News reader {import.meta.env.VITE_APP_API_URL}</h1>
			<Outlet />
		</Router>
	</React.StrictMode>,
);
