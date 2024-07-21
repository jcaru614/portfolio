import { FaDesktop, FaReact } from 'react-icons/fa';
import { CiMobile3 } from 'react-icons/ci';

export default function About() {
	return (
		<section
			id='about'
			className='min-h-screen flex flex-col items-center justify-center text-center p-4'
		>
			<h2 className='text-5xl font-bold text-textPrimary mb-6'>About Me</h2>
			<p className='text-lg text-textSecondary max-w-2xl mb-12'>
				As a seasoned Front End and Mobile Developer, I have extensive experience in building and enhancing
				web and mobile applications using technologies such as React, React Native, and TypeScript. My work
				spans across multiple industries, where I have successfully delivered high-performance, user-centric
				applications. I have a strong focus on user experience, accessibility, and collaboration with
				cross-functional teams to meet business and user needs.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<div className='border border-borderColor p-6 rounded-lg'>
					<FaReact className='text-6xl text-secondary mb-4' />
					<h3 className='text-2xl font-bold text-textPrimary mb-2'>Frontend Development</h3>
					<span className='block h-1 w-12 bg-secondary mb-4'></span>
					<p className='text-lg text-textSecondary'>React, JavaScript, Next.js Tailwind CSS, HTML, CSS,</p>
				</div>
				<div className='border border-borderColor p-6 rounded-lg'>
					<CiMobile3 className='text-6xl text-secondary mb-4' />
					<h3 className='text-2xl font-bold text-textPrimary mb-2'>React Native</h3>
					<span className='block h-1 w-12 bg-secondary mb-4'></span>
					<p className='text-lg text-textSecondary'>
						Experienced in developing hybrid mobile apps using React Native and cross-platform solutions.
					</p>
				</div>
				<div className='border border-borderColor p-6 rounded-lg'>
					<FaDesktop className='text-6xl text-secondary mb-4' />
					<h3 className='text-2xl font-bold text-textPrimary mb-2'>Software Development</h3>
					<span className='block h-1 w-12 bg-secondary mb-4'></span>
					<p className='text-lg text-textSecondary'>
						TypeScript, Redux, Thunk, Saga, Jest, React-Testing-Library, Restful API’s, Node.js, Express, SQL,
						NoSQL, Firebase
					</p>
				</div>
			</div>
		</section>
	);
}
