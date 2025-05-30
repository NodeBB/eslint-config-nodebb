
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import commonRules from './common.mjs';

export default defineConfig([
	{
		plugins: {
			js,
			'@stylistic/js': stylisticJs,
		},
		extends: ['js/recommended'],
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
			...commonRules,

			// === Project Style Rules ===
			'@stylistic/js/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
			'@stylistic/js/function-paren-newline': ['error', 'consistent'],

			// deprecated in eslint but still works
			'handle-callback-err': ['error', '^(e$|(e|(.*(_e|E)))rr)'],

			'strict': ['error', 'global'],
			'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
			'no-use-before-define': ['error', 'nofunc'],
			'prefer-destructuring': ['error', {
		 		VariableDeclarator: { array: false, object: true },
		  		AssignmentExpression: { array: false, object: false },
			}],
		},
	},
]);
