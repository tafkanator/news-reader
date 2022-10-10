import classNames from 'classnames';
import { FC } from 'react';

import { AsyncImage } from 'src/components/async-image/AsyncImage';
import { CommentForm } from 'src/components/comment-form/CommentForm';
import { Comment } from 'src/components/comment/Comment';

import styles from './NewsDetailRoute.module.css';

export const NewsDetailRoute: FC = () => {
	return (
		<article className={styles.wrap}>
			<div className={styles.imgWrap}>
				<AsyncImage src="https://placekitten.com/800/400" alt="alt" className={styles.img} />
			</div>

			<div className={styles.content}>
				<p className={styles.date}>12 hours ago</p>
				<h2 className={styles.title}>GM unveils $30,000 electric SUV that will be one of the cheapest EVs available</h2>
				<p>
					Queen Elizabeth II's doctors "are concerned" for her health and have recommend that the monarch remain under
					medical supervision, Buckingham Palace said in a statement on Thursday. This is a breaking story and will be
					updated.
				</p>
				<a href="#read-more" className={classNames('btn', 'btn--inverted', styles.readMore)}>
					Read full article
				</a>
			</div>

			<div className={styles.comments}>
				<h3>Comments</h3>
				<Comment email="jack@daniels.com" date="a moment ago">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor id leo sit amet hendrerit. Nam nec
						luctus arcu.
					</p>
				</Comment>
				<Comment email="jack@daniels.com" date="a moment ago">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor id leo sit amet hendrerit. Nam nec
						luctus arcu.
					</p>
				</Comment>

				<CommentForm
					title={<h3>Leave a commnet</h3>}
					className={styles.commentForm}
					onSubmit={async (values) => {
						console.log('values', values);
					}}
				/>
			</div>
		</article>
	);
};
