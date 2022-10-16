import { Route, ReactLocation, Navigate } from '@tanstack/react-location';

export enum Path {
	INDEX = '/',
	NEWS_LIST = '/news/',
	NEWS_DETAIL = '/news/:id',
	NOT_FOUND = '/not-found',
}

export const routes: Route[] = [
	{
		path: Path.INDEX,
		element: <Navigate replace to={Path.NEWS_LIST} />,
	},
	{
		path: Path.NEWS_LIST,
		element: () => import('src/routes/news-list/NewsListRoute').then((m) => <m.NewsListRoute />),
	},
	{
		path: Path.NEWS_DETAIL,
		element: () => import('src/routes/news-detail/NewsDetailRoute').then((m) => <m.NewsDetailRoute />),
	},
	{
		path: '*',
		element: () => import('src/routes/not-found/NotFoundRoute').then((m) => <m.NotFoundRoute />),
	},
];

export const location = new ReactLocation();
