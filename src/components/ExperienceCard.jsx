import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceCard = ({
	startDate,
	endDate,
	role,
	company,
	description,
	skills,
	className,
	link,
}) => {
	return (
		<a href={link} target='_blank' rel='noopener noreferrer' className={`block ${className}`}>
			<div className='p-6 shadow-lg hover:bg-primary hover:shadow-xl hover:rounded-lg transition-all duration-300 max-w-3xl mb-6'>
				<div className='flex justify-between items-center mb-4'>
					<span className='text-gray-400'>
						{startDate} — {endDate}
					</span>
					<div className='flex items-center'>
						<h3 className='text-xl font-bold text-textPrimary hover:text-secondary'>
							{role} · {company}
						</h3>
						<FaExternalLinkAlt className='ml-2 text-secondary' />
					</div>
				</div>
				<p className='text-textSecondary mb-4'>{description}</p>
				<div className='flex flex-wrap gap-2'>
					{skills.map((skill, index) => (
						<span key={index} className='bg-secondary text-black px-3 py-1 rounded-full'>
							{skill}
						</span>
					))}
				</div>
			</div>
		</a>
	);
};

export default ExperienceCard;
