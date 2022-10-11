import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet, Router } from '@tanstack/react-location';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from 'src/components/header/Header';
import { location, routes } from 'src/router';

import './main.css';

const client = new ApolloClient({
	uri: import.meta.env.VITE_APP_API_URL,
	cache: new InMemoryCache(),
	connectToDevTools: import.meta.env.DEV,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router location={location} routes={routes}>
				<Header />

				<main className="main">
					<Outlet />
				</main>
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
);
