import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
	return (
		<div className='bg-background min-h-screen lg:flex'>
			<Navbar />
			<main className='flex-grow w-full max-w-screen-lg mx-auto px-4'>{children}</main>
		</div>
	);
}