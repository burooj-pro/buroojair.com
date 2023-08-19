/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './node_modules/flowbite/**/*.js'],
	purge: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './node_modules/flowbite/**/*.js'],

	theme: {
		extend: {
			colors: {
				'brand-first': '#4733FD',
				'brand-second': '#3437FF',
				'brand-third': '#6820E1',
				'brand-fourth': '#2C5A75',
			},

			fontFamily: {
				'neo-sans': ['NeoSans', 'Helvetica', 'sans-serif'],
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
