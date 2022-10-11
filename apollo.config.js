module.exports = {
	client: {
		includes: ['./src/**/*.graphql'],
		excludes: ['**/schema.tsx'],
		service: {
			name: 'news-reader',
			url: 'https://news-reader.stagnationlab.dev/graphql',
			endpoint: null,
		},
	},
};
