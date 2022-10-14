import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Comment.module.css';

export interface CommentProps {
	email: string;
	date: string;
	className?: string;
	children?: ReactNode;
}

export const Comment: FC<CommentProps> = ({ email, date, className, children }) => {
	return (
		<article className={classNames(styles.wrap, className)}>
			<h4 className={styles.email}>{email}</h4>
			<p className={styles.date}>{date}</p>
			<div className={styles.content}>{children}</div>
		</article>
	);
};
