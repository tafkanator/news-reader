export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdDate: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type CreateCommentInput = {
  content: Scalars['String'];
  email: Scalars['String'];
  newsId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type NewsItem = {
  __typename?: 'NewsItem';
  comments: Array<Comment>;
  content: Scalars['String'];
  id: Scalars['ID'];
  img?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type NewsListResult = {
  __typename?: 'NewsListResult';
  rows: Array<NewsItem>;
  totalRows: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  newsItem?: Maybe<NewsItem>;
  newsList: NewsListResult;
};


export type QueryNewsItemArgs = {
  id: Scalars['ID'];
};


export type QueryNewsListArgs = {
  limit: Scalars['Int'];
  skip: Scalars['Int'];
};
