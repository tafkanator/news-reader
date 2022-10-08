import { FC } from 'react';

import { Card } from 'src/components/card/Card';
import { Path } from 'src/router';

import styles from './NewsListRoute.module.css';

export const NewsListRoute: FC = () => {
	return (
		<div className={styles.wrap}>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="//not-found"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item with longer title text that should clamp. News item with longer title text that should clamp"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
			<Card
				className={styles.card}
				titleClassName={styles.cardTitle}
				title="News item"
				url={Path.NEWS_DETAIL.replace(':id', '123')}
				imgSrc="https://placekitten.com/800/400"
			/>
		</div>
	);
};
