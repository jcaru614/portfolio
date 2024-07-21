import React from 'react';

export default function PageTitle({ title }) {
	return (
		<h2 className='text-4xl font-bold text-textPrimary relative m-6'>
			<span
				role='presentation'
				className='before:h-1 before:w-10 before:bg-secondary before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-12'
			/>
			{title.toUpperCase()}
			<span
				role='presentation'
				className='after:h-1 after:w-10 after:bg-secondary after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-12'
			/>
		</h2>
	);
}
