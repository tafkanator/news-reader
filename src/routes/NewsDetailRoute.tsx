import { Link } from '@tanstack/react-location';
import { FC } from 'react';

import { Path } from 'src/router';

export const NewsDetailRoute: FC = () => {
	return (
		<>
			<h2>NewsDetailRoute</h2>
			<Link to={Path.INDEX}>News list view</Link>
		</>
	);
};
