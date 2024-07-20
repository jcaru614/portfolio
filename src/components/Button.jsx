import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const Button = ({ text, icon, onClick, disabled, type, iconSize = 20, styles, imageStyles }) => {
	return (
		<button
			className={twMerge(
				`whitespace-nowrap text-sm font-semibold flex items-center py-2 px-2 rounded text-white bg-terminal-blue hover:bg-neural-teal`,
				styles
			)}
			onClick={onClick}
			disabled={disabled}
			type={type ? type : 'button'}
		>
			{icon && (
				<Image
					src={icon}
					alt={text || 'icon'}
					width={iconSize}
					height={iconSize}
					className={twMerge('mr-2', imageStyles)}
				/>
			)}
			{text}
		</button>
	);
};

export default Button;
