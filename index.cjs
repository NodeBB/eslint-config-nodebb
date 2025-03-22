module.exports = [
	{
		files: [
			'*.js', 'src/**/*.js', 'lib/**/*.js', 'install/**/*.js', 'nodebb',
		],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'commonjs',
			globals: {
				...globals.node,
			},
	  	},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			// === Project Style Rules ===
			'quotes': ['error', 'single', {
		  		avoidEscape: true,
		  		allowTemplateLiterals: true,
			}],
			'no-else-return': ['error', { allowElseIf: true }],
			'no-unused-vars': ['error', { caughtErrors: 'none' }],
			'operator-linebreak': ['error', 'after'],
			'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
			'handle-callback-err': ['error', '^(e$|(e|(.*(_e|E)))rr)'],
			'comma-dangle': ['error', {
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'only-multiline',
			}],
			'no-return-await': 'off',
			'no-constant-condition': ['error', { checkLoops: false }],
			'no-empty': ['error', { allowEmptyCatch: true }],
			'no-mixed-operators': ['error', { allowSamePrecedence: true }],
			'strict': ['error', 'global'],
			'indent': ['error', 'tab', { SwitchCase: 1 }],
			'no-tabs': ['error', { allowIndentationTabs: true }],
			'no-eq-null': 'off',
			'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
			'no-use-before-define': ['error', 'nofunc'],
			'object-curly-newline': ['error', { consistent: true, multiline: true }],
			'function-paren-newline': ['error', 'consistent'],
			'prefer-const': ['error', { destructuring: 'all' }],
			'prefer-destructuring': ['error', {
		 		VariableDeclarator: { array: false, object: true },
		  		AssignmentExpression: { array: false, object: false },
			}],
			'no-restricted-syntax': [
		  		'error',
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

			// === Disable Rules ===
			'camelcase': 'off',
			'no-underscore-dangle': 'off',
			'func-names': 'off',
			'no-console': 'off',
			'no-new': 'off',
			'new-cap': 'off',
			'no-shadow': 'off',
			'no-multiple-empty-lines': 'off',
			'object-shorthand': 'off',
			'consistent-return': 'off',
			'no-restricted-globals': 'off',
			'no-prototype-builtins': 'off',
			'global-require': 'off',
			'no-param-reassign': 'off',
			'default-case': 'off',
		},
	},
];
