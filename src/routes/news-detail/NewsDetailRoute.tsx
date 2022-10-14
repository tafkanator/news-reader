import { Navigate, useMatch } from '@tanstack/react-location';
import classNames from 'classnames';
import { FC, useState } from 'react';

import { CreateCommentInput } from 'src/common/types.generated';
import { AsyncImage } from 'src/components/async-image/AsyncImage';
import { CommentForm } from 'src/components/comment-form/CommentForm';
import { Comment } from 'src/components/comment/Comment';
import { SkeletonLoader } from 'src/components/skeleton-loader/SkeletonLoader';
import { Path } from 'src/router';
import {
	useNewsDetailRouteCreateCommentMutation,
	useNewsDetailRouteQuery,
} from 'src/routes/news-detail/NewsDetailRouteQueries.generated';
import { createRandomDate } from 'src/utils/createRandomDate';
import { formatLocaleDate } from 'src/utils/formatLocaleDate';
import { parseGraphQlErrors } from 'src/utils/parseGraphqlErrors';

import styles from './NewsDetailRoute.module.css';

export const NewsDetailRoute: FC = () => {
	const {
		params: { id },
	} = useMatch();

	const { data, loading, error } = useNewsDetailRouteQuery({ variables: { id } });
	const { handleCreateComment, createdCommentIds } = useCreateComment();

	const title = data?.newsItem?.title ?? '';
	const date = formatLocaleDate(createRandomDate(new Date(1800, 1, 1), new Date())); // API does not provide created date
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
					<Comment
						key={comment.id}
						email={comment.email}
						date={formatLocaleDate(comment.createdDate)}
						className={classNames({ [styles.newComment]: createdCommentIds.includes(comment.id) })}
					>
						<p>{comment.content}</p>
					</Comment>
				))}

				<CommentForm
					title={<h3>Leave a commnet</h3>}
					className={styles.commentForm}
					onSubmit={(values) =>
						data?.newsItem?.id
							? handleCreateComment({ ...values, newsId: data.newsItem.id })
							: Promise.reject(new Error('Something went wrong! Please relead the page'))
					}
				/>
			</div>
		</article>
	);
};

function useCreateComment() {
	const [createComment] = useNewsDetailRouteCreateCommentMutation({
		refetchQueries: ['NewsDetailRoute'],
		awaitRefetchQueries: true,
	});

	const [createdCommentIds, setCreatedCommentIds] = useState<string[]>([]);

	async function handleCreateComment(input: CreateCommentInput) {
		try {
			const res = await createComment({ variables: { input } });

			if (!res.data) {
				throw new Error('Something went wrong! Please relead the page');
			}

			// scroll to top to show blinking comment
			setCreatedCommentIds([...createdCommentIds, res.data.createComment.id]);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} catch (errors) {
			throw new Error(parseGraphQlErrors(errors));
		}
	}

	return {
		handleCreateComment,
		createdCommentIds,
	};
}
