import { Link } from '@tanstack/react-location';
import classNames from 'classnames';
import { FC } from 'react';

import { AsyncImage } from 'src/components/async-image/AsyncImage';

import styles from './Card.module.css';

export type CardSize = 'medium' | 'large';

export interface CardProps {
	imgSrc: string;
	title: string;
	url: string;
	className?: string;
	titleClassName?: string;
}

export const Card: FC<CardProps> = ({ imgSrc, title, url, className, titleClassName }) => {
	return (
		<article className={classNames(styles.wrap, className)}>
			<Link to={url} className={styles.link}>
				<AsyncImage src={imgSrc} alt={title} className={styles.image} />
				<h2 className={classNames(styles.title, titleClassName)}>{title}</h2>
			</Link>
		</article>
	);
};
