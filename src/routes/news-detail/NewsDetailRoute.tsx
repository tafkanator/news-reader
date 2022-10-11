import { useMatch } from '@tanstack/react-location';
import classNames from 'classnames';
import { FC } from 'react';

import { AsyncImage } from 'src/components/async-image/AsyncImage';
import { CommentForm } from 'src/components/comment-form/CommentForm';
import { Comment } from 'src/components/comment/Comment';
import { SkeletonLoader } from 'src/components/skeleton-loader/SkeletonLoader';
import { useNewsDetailRouteQuery } from 'src/routes/news-detail/NewsDetailRouteQueries.generated';

import styles from './NewsDetailRoute.module.css';

export const NewsDetailRoute: FC = () => {
	const {
		params: { id },
	} = useMatch();

	const { data, loading, error } = useNewsDetailRouteQuery({ variables: { id } });

	return (
		<article className={styles.wrap}>
			<div className={styles.imgWrap}>
				<AsyncImage src={data?.newsItem?.img ?? ''} alt={data?.newsItem?.title ?? ''} className={styles.img} />
			</div>

			<div className={styles.content}>
				{loading && <SkeletonLoader lines={6} />}

				<p className={styles.date}>
					{createRandomDate(new Date(1900, 0, 1), new Date()) /* API does not provide news date */}
				</p>

				<h2 className={styles.title}>{data?.newsItem?.title}</h2>

				{error && <p>Somethin went wrong. Please reload the page</p>}

				<p>{data?.newsItem?.content}</p>

				{data?.newsItem?.url && (
					<a
						href={data.newsItem.url}
						target="_blank"
						className={classNames('btn', 'btn--inverted', styles.readMore)}
						rel="noreferrer"
					>
						Read full article
					</a>
				)}
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

function createRandomDate(start: Date, end: Date) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
}
