const { configs } = require('@eslint/js');
module.exports = [
	configs.recommended,
	{
	  files: ['**/*.js'],
	  languageOptions: {
		ecmaVersion: 2020,
		sourceType: 'script',
		globals: {
		  // Node.js globals are implied, no need to redefine unless custom ones are used
		}
	  },
	  linterOptions: {
		reportUnusedDisableDirectives: true
	  },
	  rules: {
		// === Project Style Rules ===
		'import/no-unresolved': 'error',
		'quotes': ['error', 'single', {
		  avoidEscape: true,
		  allowTemplateLiterals: true
		}],
		'no-else-return': ['error', { allowElseIf: true }],
		'operator-linebreak': ['error', 'after'],
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'handle-callback-err': ['error', '^(e$|(e|(.*(_e|E)))rr)'],
		'comma-dangle': ['error', {
		  arrays: 'always-multiline',
		  objects: 'always-multiline',
		  imports: 'always-multiline',
		  exports: 'always-multiline',
		  functions: 'only-multiline'
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
		  AssignmentExpression: { array: false, object: false }
		}],
		'no-restricted-syntax': [
		  'error',
		  {
			selector: 'ForInStatement',
			message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
		  },
		  {
			selector: 'LabeledStatement',
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
		  },
		  {
			selector: 'WithStatement',
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
		  }
		],
		'max-len': ['error', {
		  code: 120,
		  tabWidth: 2,
		  ignoreUrls: true,
		  ignoreStrings: true,
		  ignoreTemplateLiterals: true,
		  ignoreRegExpLiterals: true
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
		'import/no-extraneous-dependencies': 'off',
		'import/no-dynamic-require': 'off',
		'global-require': 'off',
		'no-param-reassign': 'off',
		'default-case': 'off'
	  }
	}
];
