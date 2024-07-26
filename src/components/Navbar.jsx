import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Navbar() {
	return (
		<div className='bg-primary text-textPrimary z-50'>
			{/* Header for small screens */}
			<div className='lg:hidden flex flex-col items-start p-4 w-full h-auto shadow-lg'>
				<div className='text-2xl font-bold mb-2'>Joey Caruana</div>
				<p className='text-lg mb-2'>Front End & Mobile Developer</p>
				<p className='text-sm mb-4 text-textSecondary max-w-xs'>
					Creating immersive, engaging, and top-tier digital solutions for web and mobile.
				</p>
				<div className='flex justify-between w-full mb-2'>
					<div className='flex space-x-4'>
						<Link href='https://github.com/jcaru614' target='_blank' rel='noopener noreferrer'>
							<FaGithub className='text-xl hover:text-secondary transition-colors duration-300' />
						</Link>
						<Link href='https://www.linkedin.com/in/joey-caruana/' target='_blank' rel='noopener noreferrer'>
							<FaLinkedin className='text-xl hover:text-secondary transition-colors duration-300' />
						</Link>
					</div>
					<div>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
			{/* Navbar for large screens */}
			<div className='hidden lg:flex flex-col items-start py-10 min-h-screen shadow-lg px-6 lg:w-64 sticky top-0'>
				<h2 className='text-4xl font-bold mb-4'>Joey Caruana</h2>
				<p className='text-lg mb-4 text-textSecondary'>Front End & Mobile Developer</p>
				<p className='text-sm mb-8 max-w-xs'>
					Creating immersive, engaging, and top-tier digital solutions for web and mobile.
				</p>
				<nav className='flex flex-col space-y-6 mb-6 flex-grow'>
					{['Home', 'About', 'Experience', 'Contact'].map((item, index) => (
						<div key={index} className='relative flex items-center group'>
							<span
								role='presentation'
								className='absolute left-0 top-1/2 -translate-y-1/2 h-px w-6 bg-textPrimary transition-all duration-300 group-hover:w-12 group-hover:bg-secondary'
							/>
							<Link
								href={`#${item.toLowerCase()}`}
								className='relative text-lg font-bold text-textPrimary transition-transform duration-300 group-hover:translate-x-3 group-hover:text-secondary ml-10'
							>
								{item}
							</Link>
						</div>
					))}
				</nav>
				<div className='flex space-x-6 mb-6'>
					<Link href='https://github.com/jcaru614' target='_blank' rel='noopener noreferrer'>
						<FaGithub className='text-3xl hover:text-secondary transition-colors duration-300' />
					</Link>
					<Link href='https://www.linkedin.com/in/joey-caruana/' target='_blank' rel='noopener noreferrer'>
						<FaLinkedin className='text-3xl hover:text-secondary transition-colors duration-300' />
					</Link>
				</div>
				<div className='self-start'>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
}
