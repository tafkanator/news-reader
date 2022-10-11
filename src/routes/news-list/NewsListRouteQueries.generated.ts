import * as Types from '../../common/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NewsListRouteQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int'];
  limit: Types.Scalars['Int'];
}>;


export type NewsListRouteQuery = { __typename?: 'Query', newsList: { __typename?: 'NewsListResult', rows: Array<{ __typename?: 'NewsItem', id: string, title: string, img?: string | null }> } };


export const NewsListRouteDocument = gql`
    query NewsListRoute($skip: Int!, $limit: Int!) {
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
 * __useNewsListRouteQuery__
 *
 * To run a query within a React component, call `useNewsListRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsListRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsListRouteQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useNewsListRouteQuery(baseOptions: Apollo.QueryHookOptions<NewsListRouteQuery, NewsListRouteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsListRouteQuery, NewsListRouteQueryVariables>(NewsListRouteDocument, options);
      }
export function useNewsListRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsListRouteQuery, NewsListRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsListRouteQuery, NewsListRouteQueryVariables>(NewsListRouteDocument, options);
        }
export type NewsListRouteQueryHookResult = ReturnType<typeof useNewsListRouteQuery>;
export type NewsListRouteLazyQueryHookResult = ReturnType<typeof useNewsListRouteLazyQuery>;
export type NewsListRouteQueryResult = Apollo.QueryResult<NewsListRouteQuery, NewsListRouteQueryVariables>;