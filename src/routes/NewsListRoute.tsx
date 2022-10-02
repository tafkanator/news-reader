import { Link } from '@tanstack/react-location';
import { FC } from 'react';

import { Path } from 'src/router';

export const NewsListRoute: FC = () => {
	return (
		<>
			<h2>NewsListRoute</h2>

			<Link to={Path.NEWS_DETAIL.replace(':id', '123')}>News detail</Link>
		</>
	);
};
