import * as Types from '../../common/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NewsListQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int'];
  limit: Types.Scalars['Int'];
}>;


export type NewsListQuery = { __typename?: 'Query', newsList: { __typename?: 'NewsListResult', rows: Array<{ __typename?: 'NewsItem', id: string, title: string, img?: string | null }> } };


export const NewsListDocument = gql`
    query NewsList($skip: Int!, $limit: Int!) {
  newsList(skip: $skip, limit: $limit) {
    rows {
      id
      title
      img
    }
  }
}
    `;

/**
 * __useNewsListQuery__
 *
 * To run a query within a React component, call `useNewsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsListQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useNewsListQuery(baseOptions: Apollo.QueryHookOptions<NewsListQuery, NewsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options);
      }
export function useNewsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsListQuery, NewsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options);
        }
export type NewsListQueryHookResult = ReturnType<typeof useNewsListQuery>;
export type NewsListLazyQueryHookResult = ReturnType<typeof useNewsListLazyQuery>;
export type NewsListQueryResult = Apollo.QueryResult<NewsListQuery, NewsListQueryVariables>;