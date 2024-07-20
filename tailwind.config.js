/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#15212C',
				secondary: '#CBF381',
				background: '#1A191D',
				textPrimary: '#FFFFFF',
				textSecondary: '#66D9ED',
				borderColor: '#E0E0E0',
				black: '#000000',
			},
			screens: {
				sm: '250px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
