module.exports = {
	"globals": {
		"app": true,
		"io": true,
		"socket": true,
		"ajaxify": true,
		"config": true,
		"utils": true,
		"overrides": true,
		"componentHandler": true,
		"bootbox": true,
		"Tinycon": true,
		"Promise": true,
		"navigator": true,
		"ace": true
	},
	"env": {
		"jquery": true,
		"amd": true,
		"browser": true,
		"es6": true
	},
	"rules": {
		"comma-dangle": ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "never"
		}],
		"block-scoped-var": "off",
		"no-dupe-class-members": "off",
		"prefer-object-spread": "off",
		"prefer-reflect": "off",
		"strict": "off",

		// ES6
		"prefer-rest-params": "off",
		"prefer-spread": "off",
		"prefer-arrow-callback": "off",
		"prefer-template": "off",
		"no-var": "off",
		"object-shorthand": "off",
		"vars-on-top": "off",
		"prefer-destructuring": "off",
		// identical to airbnb rule
		// except for allowing for..in, because for..of is unavailable on some clients
		"no-restricted-syntax": [
			"error",
			{
				"selector": "ForOfStatement",
				"message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
			},
			{
				"selector": "LabeledStatement",
				"message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
			},
			{
				"selector": "WithStatement",
				"message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
			}
		]
	},
	"parserOptions": {
		"ecmaVersion": 2020,
		"sourceType": "module",
		"ecmaFeatures": {
			"classes": false,
			"defaultParams": false,
			"blockBindings": false,
			"forOf": false,
			"generators": false,
			"globalReturn": false,
			"jsx": false,
			"objectLiteralComputedProperties": false,
			"objectLiteralDuplicateProperties": false,
			"objectLiteralShorthandMethods": false,
			"objectLiteralShorthandProperties": false,
			"impliedStrict": false,
			"restParams": false,
			"superInFunctions": false
		}
	}
}