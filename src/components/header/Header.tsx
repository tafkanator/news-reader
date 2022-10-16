import { Link, useMatchRoute } from '@tanstack/react-location';
import classNames from 'classnames';
import { FC } from 'react';

import { BackArrow } from 'src/components/back-arrow/BackArrow';
import { Path } from 'src/router';

import styles from './Header.module.css';

export const Header: FC = () => {
	const matchRoute = useMatchRoute();
	const isInSubPage = !matchRoute({ to: Path.NEWS_LIST });

	return (
		<header className={classNames(styles.wrap, { [styles.hasBackLink]: isInSubPage })}>
			<Link to={Path.INDEX} className={styles.backLink}>
				<BackArrow />
			</Link>

			<h1 className={styles.title}>World news</h1>
		</header>
	);
};
