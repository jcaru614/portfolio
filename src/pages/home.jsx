import React, { useEffect, useState } from 'react';

export default function Home() {
	const [shapes, setShapes] = useState([]);

	useEffect(() => {
		setShapes([
			{ className: 'shape-square', style: { top: '10%', left: '20%' } },
			{ className: 'shape-square', style: { top: '30%', left: '70%' } },
			{ className: 'shape-square', style: { top: '50%', left: '80%' } },
			{ className: 'shape-circle', style: { top: '70%', left: '40%' } },
			{ className: 'shape-circle', style: { top: '80%', left: '10%' } },
			{ className: 'shape-circle', style: { top: '20%', left: '60%' } },
		]);
	}, []);

	return (
		<section
			id='home'
			className='relative min-h-screen flex flex-col items-center justify-center text-center p-4'
		>
			<div className='relative z-10'>
				<h1 className='text-8xl font-bold mb-4 text-textPrimary'>Joey Caruana</h1>
				<p className='text-2xl font-medium text-textSecondary'>Front End & Mobile Developer</p>
			</div>
			<div className='shapes-container absolute inset-0 z-0 overflow-hidden'>
				{shapes.map((shape, index) => (
					<div key={index} className={`shape ${shape.className}`} style={shape.style}></div>
				))}
			</div>
		</section>
	);
}
