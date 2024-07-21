import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight;
		setIsVisible(bottomReached);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`hover:bg-secondary fixed bottom-8 right-8 p-3 bg-primary text-white rounded shadow-lg transition-opacity duration-300 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<FaArrowUp className='text-xl' />
		</button>
	);
};

export default BackToTopButton;
