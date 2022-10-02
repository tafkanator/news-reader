module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		'import/internal-regex': '^src/',
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
			},
		],
		'import/no-unresolved': 'off',
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
				},
				groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'object', 'index'], 'unknown'],
				pathGroups: [
					{
						pattern: '*.generated.*',
						group: 'unknown',
					},
					{
						pattern: '*.*{css,scss}',
						group: 'unknown',
					},
				],
			},
		],
	},
	ignorePatterns: ['src/**/*.generated.ts', 'dist/', 'node_modules/', '.vscode/'],
};
