/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/@/**/*.{jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				brandYellow: "#FFD341",
			},
			maxWidth: {
				containerBrand: "1200px",
			},
			fontFamily: {
				sans: ["inter", "sans-serif"],
			},
		},
	},

	plugins: [],
};
