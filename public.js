export default [
	{
	  files: ['**/*.js'],
	  languageOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		globals: {
		  app: 'writable',
		  io: 'writable',
		  socket: 'writable',
		  ajaxify: 'writable',
		  config: 'writable',
		  utils: 'writable',
		  overrides: 'writable',
		  componentHandler: 'writable',
		  bootbox: 'writable',
		  Tinycon: 'writable',
		  Promise: 'writable',
		  navigator: 'writable',
		  ace: 'writable'
		}
	  },
	  linterOptions: {
		reportUnusedDisableDirectives: true
	  },
	  rules: {
		'comma-dangle': ['error', {
		  arrays: 'always-multiline',
		  objects: 'always-multiline',
		  imports: 'always-multiline',
		  exports: 'always-multiline',
		  functions: 'never'
		}],
		'block-scoped-var': 'off',
		'no-dupe-class-members': 'off',
		'prefer-object-spread': 'off',
		'prefer-reflect': 'off',
		strict: 'off',

		// ES6 rules
		'prefer-rest-params': 'off',
		'prefer-spread': 'off',
		'prefer-arrow-callback': 'off',
		'prefer-template': 'off',
		'no-var': 'off',
		'object-shorthand': 'off',
		'vars-on-top': 'off',
		'prefer-destructuring': 'off',

		// Custom restrictions
		'no-restricted-syntax': [
		  'error',
		  {
			selector: 'ForOfStatement',
			message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
		  },
		  {
			selector: 'LabeledStatement',
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
		  },
		  {
			selector: 'WithStatement',
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
		  }
		]
	  }
	}
  ];
