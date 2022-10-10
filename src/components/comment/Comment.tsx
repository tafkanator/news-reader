import { FC, ReactNode } from 'react';

import styles from './Comment.module.css';

export interface CommentProps {
	email: string;
	date: string;
	children?: ReactNode;
}

export const Comment: FC<CommentProps> = ({ email, date, children }) => {
	return (
		<article className={styles.wrap}>
			<h4 className={styles.email}>{email}</h4>
			<p className={styles.date}>{date}</p>
			<div className={styles.content}>{children}</div>
		</article>
	);
};
