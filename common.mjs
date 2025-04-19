// rules common to both server and client
export default {
	'@stylistic/js/semi': ['error', 'always'],
	'@stylistic/js/no-multi-spaces': 'error',
	'@stylistic/js/comma-dangle': ['error', {
		arrays: 'always-multiline',
		objects: 'always-multiline',
		imports: 'always-multiline',
		exports: 'always-multiline',
		functions: 'only-multiline',
	}],
	'@stylistic/js/quotes': ['error', 'single', {
		avoidEscape: true,
		allowTemplateLiterals: true,
	}],
	'@stylistic/js/operator-linebreak': ['error', 'after'],
	'@stylistic/js/no-mixed-operators': ['error', { allowSamePrecedence: true }],

	'@stylistic/js/space-before-blocks': ['error', 'always'],
	'@stylistic/js/space-infix-ops': 'error',
	'@stylistic/js/space-in-parens': ['error', 'never'],
	'@stylistic/js/space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'ignore' }],
	'@stylistic/js/indent': ['error', 'tab', { SwitchCase: 1 }],
	'@stylistic/js/no-tabs': ['error', { allowIndentationTabs: true }],
	'@stylistic/js/object-curly-newline': ['error', { consistent: true, multiline: true }],

	'prefer-const': ['error', { destructuring: 'all' }],
	'no-else-return': ['error', { allowElseIf: true }],
	'no-unused-vars': ['error', { caughtErrors: 'none' }],
	'no-empty': ['error', { allowEmptyCatch: true }],
	'no-irregular-whitespace': 'error',
	'no-prototype-builtins': 'off',

	'no-restricted-syntax': ['error',
		{
			selector: 'ForInStatement',
			message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
		},
		{
			selector: 'LabeledStatement',
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
		},
		{
			selector: 'WithStatement',
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
		},
	],
	'max-len': ['error', {
		code: 120,
		tabWidth: 2,
		ignoreUrls: true,
		ignoreStrings: true,
		ignoreTemplateLiterals: true,
		ignoreRegExpLiterals: true,
	}],
};
