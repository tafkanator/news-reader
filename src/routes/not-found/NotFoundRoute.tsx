import { Link } from '@tanstack/react-location';
import classNames from 'classnames';
import { FC } from 'react';

import { AsyncImage } from 'src/components/async-image/AsyncImage';

import styles from './NotFoundRoute.module.css';
import notFoundImgSrc from './not-found.jpg';

export const NotFoundRoute: FC = () => {
	return (
		<div className={styles.wrap}>
			<div className={styles.content}>
				<h2 className={styles.title}>404</h2>
				<p>I pity the fool who is looking news from the wrong places.</p>
			</div>

			<AsyncImage src={notFoundImgSrc} alt="BA Baraccus" className={styles.img} />

			<Link className={classNames('btn', 'btn--inverted', styles.btn)}>Back to home</Link>
		</div>
	);
};
