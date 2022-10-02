import { Outlet, Router } from '@tanstack/react-location';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from 'src/components/header/Header';
import { location, routes } from 'src/router';

import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Router location={location} routes={routes}>
			<Header />

			<main className="main">
				<Outlet />
			</main>
		</Router>
	</React.StrictMode>,
);
