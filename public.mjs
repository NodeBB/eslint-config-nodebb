
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin';
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
			'public/**/*.js', 'static/**/*.js'
		],
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
				bootbox: 'writable',
				Tinycon: 'writable',
				Promise: 'writable',
				ace: 'writable',
				$: 'readonly',
				jQuery: 'readonly',
				define: 'readonly',
				require: 'readonly',
				module: 'readonly',
				...globals.browser,
			},
	  	},
	  	linterOptions: {
			reportUnusedDisableDirectives: true,
	  	},
	  	rules: {
			...commonRules,
		},
	},
]);
