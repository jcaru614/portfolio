import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
	return (
		<div className='fixed top-0 left-0 w-full lg:w-64 bg-primary text-white z-50'>
			{/* Header for small screens */}
			<div className='lg:hidden flex flex-col items-center p-6 bg-primary text-white fixed top-0 left-0 w-full h-[200px] z-50 shadow-lg'>
				<div className='text-3xl font-bold mb-2'>Joseph Caruana</div>
				<p className='text-xl mb-4'>Front End and Mobile Developer</p>
				<nav className='flex space-x-6 mb-4'>
					<Link href='https://github.com/jcaru614' target='_blank' rel='noopener noreferrer'>
						<FaGithub className='text-2xl hover:text-secondary transition-colors duration-300' />
					</Link>
					<Link href='https://www.linkedin.com/in/joey-caruana/' target='_blank' rel='noopener noreferrer'>
						<FaLinkedin className='text-2xl hover:text-secondary transition-colors duration-300' />
					</Link>
				</nav>
			</div>

			{/* Navbar for large screens */}
			<div className='hidden lg:flex flex-col items-start py-10 min-h-screen bg-primary text-white shadow-lg px-6'>
				<p className='text-4xl font-bold mb-4'>Joseph Caruana</p>
				<p className='text-xl mb-4 text-textSecondary'>Full Stack and Mobile Developer</p>
				<p className='text-m mb-8 max-w-xs'>
					Creating immersive, engaging, and top-tier digital solutions for web and mobile.
				</p>
				<nav className='flex flex-col space-y-6 mb-6'>
					{['Home', 'About', 'Experience', 'Contact'].map((item, index) => (
						<div key={index} className='relative flex items-center group'>
							<span
								role='presentation'
								className='absolute left-0 top-1/2 -translate-y-1/2 h-px w-6 bg-white transition-all duration-300 group-hover:w-12 group-hover:bg-secondary'
							/>
							<Link
								href={`#${item.toLowerCase()}`}
								className='relative text-lg font-bold text-white transition-transform duration-300 group-hover:translate-x-3 group-hover:text-secondary ml-10'
							>
								{item}
							</Link>
						</div>
					))}
				</nav>
				<div className='flex space-x-6'>
					<Link href='https://github.com/jcaru614' target='_blank' rel='noopener noreferrer'>
						<FaGithub className='text-3xl hover:text-secondary transition-colors duration-300' />
					</Link>
					<Link href='https://www.linkedin.com/in/joey-caruana/' target='_blank' rel='noopener noreferrer'>
						<FaLinkedin className='text-3xl hover:text-secondary transition-colors duration-300' />
					</Link>
				</div>
			</div>
		</div>
	);
}
