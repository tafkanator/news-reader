import { Route, ReactLocation } from '@tanstack/react-location';

import { NewsDetailRoute } from 'src/routes/NewsDetailRoute';
import { NewsListRoute } from 'src/routes/NewsListRoute';
import { NotFoundRoute } from 'src/routes/NotFoundRoute';

export enum Path {
	INDEX = '/',
	NEWS_DETAIL = '/:id',
}

export const routes: Route[] = [
	{
		path: Path.INDEX,
		element: <NewsListRoute />,
	},
	{
		path: Path.NEWS_DETAIL,
		element: <NewsDetailRoute />,
	},
	{
		path: '*',
		element: <NotFoundRoute />,
	},
];

export const location = new ReactLocation();
