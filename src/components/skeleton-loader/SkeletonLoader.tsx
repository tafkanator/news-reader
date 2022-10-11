import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './SkeletonLoader.module.css';

export interface SkeletonLoaderProps {
	className?: string;
	children?: ReactNode;
	lines?: number;
}

export const SkeletonLoader: FC<SkeletonLoaderProps> = ({ lines = 3, className }) => {
	return (
		<div className={classNames(styles.wrap, className)}>
			{Array.from({ length: lines }).map((_v, i) => (
				<div key={i} className={styles.line}></div>
			))}
		</div>
	);
};
