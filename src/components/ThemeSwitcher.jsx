import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		if (localStorage.theme === 'light') {
			document.body.classList.add('light');
			setTheme('light');
		} else {
			document.body.classList.add('dark');
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
		}
	}, []);

	const toggleTheme = () => {
		if (theme === 'dark') {
			document.body.classList.add('light');
			document.body.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setTheme('light');
		} else {
			document.body.classList.add('dark');
			document.body.classList.remove('light');
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		}
	};

	return (
		<div
			className={`relative inline-block w-10 h-6 transition duration-200 ease-linear ${
				theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
			} rounded-full cursor-pointer`}
			onClick={toggleTheme}
		>
			<span
				className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-200 ease-linear transform ${
					theme === 'dark' ? 'translate-x-0 bg-secondary' : 'translate-x-4 bg-secondary'
				}`}
			/>
		</div>
	);
}
