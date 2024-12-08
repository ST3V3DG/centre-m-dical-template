/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: ["./html/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
