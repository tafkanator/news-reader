import * as Types from '../../common/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NewsDetailRouteQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type NewsDetailRouteQuery = { __typename?: 'Query', newsItem?: { __typename?: 'NewsItem', id: string, img?: string | null, title: string, content: string, url: string, comments: Array<{ __typename?: 'Comment', id: string, email: string, createdDate: any, content: string }> } | null };


export const NewsDetailRouteDocument = gql`
    query NewsDetailRoute($id: ID!) {
  newsItem(id: $id) {
    id
    img
    title
    content
    url
    comments {
      id
      email
      createdDate
      content
    }
  }
}
    `;

/**
 * __useNewsDetailRouteQuery__
 *
 * To run a query within a React component, call `useNewsDetailRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsDetailRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsDetailRouteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNewsDetailRouteQuery(baseOptions: Apollo.QueryHookOptions<NewsDetailRouteQuery, NewsDetailRouteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsDetailRouteQuery, NewsDetailRouteQueryVariables>(NewsDetailRouteDocument, options);
      }
export function useNewsDetailRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsDetailRouteQuery, NewsDetailRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsDetailRouteQuery, NewsDetailRouteQueryVariables>(NewsDetailRouteDocument, options);
        }
export type NewsDetailRouteQueryHookResult = ReturnType<typeof useNewsDetailRouteQuery>;
export type NewsDetailRouteLazyQueryHookResult = ReturnType<typeof useNewsDetailRouteLazyQuery>;
export type NewsDetailRouteQueryResult = Apollo.QueryResult<NewsDetailRouteQuery, NewsDetailRouteQueryVariables>;