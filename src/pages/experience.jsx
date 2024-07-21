import React from 'react';
import { ExperienceCard, PageTitle } from '@/components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

const Experience = () => {
	const experiences = [
		{
			startDate: '02/2022',
			endDate: 'PRESENT',
			role: 'Mobile Developer - Remote',
			company: 'General Motors',
			description: `Developed and enhanced GM's mobile apps using React Native and TypeScript, focusing on features like the Connected Camera and Digital Key. Improved app performance and scalability by overhauling navigation patterns and integrating multiple SDKs. Collaborated closely with UX designers and backend engineers, participating in Agile ceremonies to ensure timely delivery of features.`,
			skills: ['React Native', 'Redux', 'TypeScript', 'Saga', 'Thunk'],
			link: 'https://www.gm.com/',
		},
		{
			startDate: '03/2021',
			endDate: '02/2022',
			role: 'Front End Developer - Remote',
			company: 'Capco',
			description: `Modernized Oncor's client portal with React and TypeScript, reducing page load times and improving user engagement. Developed interactive dashboards, advanced search features, and dynamic charts, creating a library of reusable components for the team. Ensured high test coverage and minimized bugs through comprehensive unit and integration testing.`,
			skills: ['React', 'Redux', 'TypeScript', 'Material UI', 'Jest'],
			link: 'https://www.capco.com/',
		},
		{
			startDate: '07/2020',
			endDate: '03/2021',
			role: 'Front End | Mobile Developer - Remote',
			company: 'Infosys Limited',
			description: `Built high-quality front-end solutions using React and React Native, enhancing user experiences for web and mobile platforms. Designed metrics dashboards and interactive charts for Walmart, improving data analysis and operational efficiency. Developed a shopping app for Tractor Supply Co., fixing complex bugs to ensure a smooth release.`,
			skills: ['React', 'React Native', 'Redux', 'Material UI'],
			link: 'https://www.infosys.com/',
		},
	];

	return (
		<section
			id='about'
			className='min-h-screen flex flex-col items-center justify-center text-center p-4'
		>
			<PageTitle title='Professional Experience' />
			{experiences.map((exp, index) => (
				<ExperienceCard
					key={index}
					startDate={exp.startDate}
					endDate={exp.endDate}
					role={exp.role}
					company={exp.company}
					description={exp.description}
					skills={exp.skills}
					link={exp.link}
					className={index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-left'}
				/>
			))}
			<Link
				href='/resume.pdf'
				target='_blank'
				rel='noopener noreferrer'
				className={`mt-12 text-2xl text-textPrimary hover:text-secondary transition-colors duration-300 ${
					experiences.length % 2 === 0 ? 'ml-auto' : 'mr-auto'
				}`}
			>
				View Full Résumé <FaExternalLinkAlt className='inline ml-2' />
			</Link>
		</section>
	);
};

export default Experience;
