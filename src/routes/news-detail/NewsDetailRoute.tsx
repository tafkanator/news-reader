import { Navigate, useMatch } from '@tanstack/react-location';
import classNames from 'classnames';
import { FC } from 'react';

import { AsyncImage } from 'src/components/async-image/AsyncImage';
import { CommentForm } from 'src/components/comment-form/CommentForm';
import { Comment } from 'src/components/comment/Comment';
import { SkeletonLoader } from 'src/components/skeleton-loader/SkeletonLoader';
import { Path } from 'src/router';
import { useNewsDetailRouteQuery } from 'src/routes/news-detail/NewsDetailRouteQueries.generated';

import styles from './NewsDetailRoute.module.css';

export const NewsDetailRoute: FC = () => {
	const {
		params: { id },
	} = useMatch();

	const { data, loading, error } = useNewsDetailRouteQuery({ variables: { id } });

	const title = data?.newsItem?.title ?? '';
	const date = createRandomDate(new Date(1900, 0, 1), new Date()); /* API does not provide created date */
	const content = data?.newsItem?.content;
	const img = data?.newsItem?.img ?? '';
	const url = data?.newsItem?.url;
	const comments = data?.newsItem?.comments ?? [];

	// show 404 page if news not found from the API
	if (!data?.newsItem && !loading) {
		return <Navigate replace to={Path.NOT_FOUND} />;
	}

	return (
		<article className={styles.wrap}>
			<div className={styles.imgWrap}>
				<AsyncImage src={img} alt={title} className={styles.img} />
			</div>

			<div className={styles.content}>
				{loading && <SkeletonLoader lines={6} />}

				<p className={styles.date}>{date}</p>
				<h2 className={styles.title}>{title}</h2>
				{error && <p>Somethin went wrong. Please reload the page</p>}
				<p>{content}</p>

				{url && (
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						className={classNames('btn', 'btn--inverted', styles.readMore)}
					>
						Read full article
					</a>
				)}
			</div>

			<div className={styles.comments}>
				<h3>Comments</h3>

				{comments.length === 0 && !loading && <p>No comments yet. Be the first one to leave a comment!</p>}

				{comments.map((comment) => (
					<Comment key={comment.id} email={comment.email} date={comment.createdDate}>
						<p>{comment.content}</p>
					</Comment>
				))}

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

function createRandomDate(start: Date, end: Date) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
}
