/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // Enable class-based dark mode
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				bebas: ['Bebas Neue', 'sans-serif'],
				mono: ['Courier New', 'Consolas', 'Menlo', 'monospace'],
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				background: 'var(--color-background)',
				textPrimary: 'var(--color-textPrimary)',
				textSecondary: 'var(--color-textSecondary)',
				borderColor: 'var(--color-borderColor)',
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
