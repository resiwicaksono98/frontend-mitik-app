/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'lato' : ['Lato', 'sans-serif'],
				'oswald': ['Oswald', 'sans-serif']
			},
			colors: {
				primary: '#3C3B42',
				secondary: '#ACCCCB'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
