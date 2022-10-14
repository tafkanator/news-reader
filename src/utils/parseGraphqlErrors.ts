import { ApolloError } from '@apollo/client';

export function parseGraphQlErrors(error: unknown) {
	if (error instanceof ApolloError) {
		return error.graphQLErrors.map((err) => err.message).join(', ');
	}

	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === 'string') {
		return error;
	}

	return 'Something went wrong. Please reload the page';
}
