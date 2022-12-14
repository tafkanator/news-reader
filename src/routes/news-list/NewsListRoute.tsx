import { FC } from 'react';

import { Card } from 'src/components/card/Card';
import { Path } from 'src/router';
import { useNewsListRouteQuery } from 'src/routes/news-list/NewsListRouteQueries.generated';

import styles from './NewsListRoute.module.css';

export const NewsListRoute: FC = () => {
	const { data } = useNewsListRouteQuery({ variables: { skip: 0, limit: 100 } });

	const newsList = data?.newsList.rows ?? [];

	return (
		<div className={styles.wrap}>
			{newsList.map((item) => (
				<Card
					key={item.id}
					className={styles.card}
					titleClassName={styles.cardTitle}
					title={item.title}
					url={Path.NEWS_DETAIL.replace(':id', item.id)}
					imgSrc={item.img ?? ''}
				/>
			))}
		</div>
	);
};
