module.exports = {
	client: {
		includes: ['./src/**/*.graphql'],
		service: {
			name: 'news-reader',
			url: 'https://news-reader.stagnationlab.dev/graphql',
			skipSSLValidation: true,
		},
	},
};
