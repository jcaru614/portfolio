import { FaDesktop, FaReact } from 'react-icons/fa';
import { CiMobile3 } from 'react-icons/ci';
import { PageTitle } from '@/components';

export default function About() {
	const test = () => {
		return true;
	};
	return (
		<section id='about' className='min-h-screen flex flex-col items-center justify-center p-4'>
			<PageTitle title='about' />
			<p className='text-lg text-textSecondary max-w-2xl mb-12 text-left lg:text-center'>
				As a Front End and Mobile Developer, I specialize in creating and optimizing web and mobile
				applications using technologies like React, React Native, and TypeScript. My diverse
				industry experience has enabled me to deliver high-performance, user-centric applications that
				exceed expectations. I am deeply committed to enhancing user experience and collaborating
				effectively with cross-functional teams to meet both business objectives and user needs.
			</p>
			<div className='flex flex-col md:flex-row gap-0 border-2 border-borderColor w-full'>
				<div className='flex flex-col items-start p-6 border-b-2 md:border-r-2 border-borderColor md:border-b-0 flex-1'>
					<FaReact className='text-6xl text-secondary mb-4' />
					<h3 className='text-2xl font-bold text-textPrimary mb-2 relative'>
						<span className='inline-block after:block after:absolute after:w-12 after:h-[2px] after:bg-secondary after:-bottom-1 after:left-0'>
							Frontend Development
						</span>
					</h3>
					<div className='text-textSecondary text-lg mt-2'>
						<span>
							<p className='text-secondary'>{`<h3>`}</p>
						</span>
						<p className='border-l-2 pl-4 p-2 border-secondary'>
							React, JavaScript, Next.js, Tailwind CSS, HTML, CSS
						</p>
						<span>
							<p className='text-secondary'>{`</h3>`}</p>
						</span>
					</div>
				</div>
				<div className='flex flex-col items-start p-6 border-b-2 md:border-r-2 border-borderColor md:border-b-0 flex-1'>
					<CiMobile3 className='text-6xl text-secondary mb-4' />
					<h3 className='text-2xl font-bold text-textPrimary mb-2 relative'>
						<span className='inline-block after:block after:absolute after:w-12 after:h-[2px] after:bg-secondary after:-bottom-1 after:left-0'>
							React Native
						</span>
					</h3>
					<div className='text-textSecondary text-lg mt-2'>
						<span>
							<p className='text-secondary'>{`<Text>`}</p>
						</span>
						<p className='border-l-2 pl-4 p-2 border-secondary'>
							Experienced in developing hybrid mobile apps using React Native and cross-platform solutions.
						</p>
						<span>
							<p className='text-secondary'>{`</Text>`}</p>
						</span>
					</div>
				</div>
				<div className='flex flex-col items-start p-6 flex-1'>
					<FaDesktop className='text-6xl text-secondary mb-4' />
					<h3 className='text-2xl font-bold text-textPrimary mb-2 relative'>
						<span className='inline-block after:block after:absolute after:w-12 after:h-[2px] after:bg-secondary after:-bottom-1 after:left-0'>
							Software Development
						</span>
					</h3>
					<div className='text-textSecondary text-lg mt-2'>
						<span>
							<p className='text-secondary'>{`() => {`}</p>
						</span>
						<p className='border-l-2 pl-4 p-2 border-secondary'>
							TypeScript, Redux, Thunk, Saga, Jest, React-Testing-Library, Restful API’s, Node.js, Express, SQL,
							NoSQL, Firebase
						</p>
						<span>
							<p className='text-secondary ml-3'> {`   };`}</p>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
