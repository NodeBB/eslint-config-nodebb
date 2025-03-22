const { configs } = require('@eslint/js');

module.exports = [
	{
		ignores: [
			'eslint.config.js',
		],
	},
	configs.recommended,
];
