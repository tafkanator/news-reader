import { Route, ReactLocation } from '@tanstack/react-location';

export enum Path {
	INDEX = '/',
	NEWS_DETAIL = '/:id',
}

export const routes: Route[] = [
	{
		path: Path.INDEX,
		element: () => import('src/routes/news-list/NewsListRoute').then((m) => <m.NewsListRoute />),
	},
	{
		path: Path.NEWS_DETAIL,
		element: () => import('src/routes/news-detail/NewsDetailRoute').then((m) => <m.NewsDetailRoute />),
	},
	{
		path: '*',
		element: () => import('src/routes/NotFoundRoute').then((m) => <m.NotFoundRoute />),
	},
];

export const location = new ReactLocation();
