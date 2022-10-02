import { FC } from 'react';

export const App: FC = () => {
	return <h1>News reader {import.meta.env.VITE_APP_API_URL}</h1>;
};
