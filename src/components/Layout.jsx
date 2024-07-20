import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
	return (
		<div className='lg:flex'>
			<Navbar />
			<main className='flex-grow min-h-screen lg:ml-64 lg:pl-0'>
				{children}
			</main>
		</div>
	);
}
