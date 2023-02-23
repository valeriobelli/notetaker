/** @type {import("prettier").Config} */
module.exports = {
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	plugins: [require.resolve('prettier-plugin-tailwindcss')],
	useTabs: true,
}
