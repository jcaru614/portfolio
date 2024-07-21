/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from 'react';
import '@/styles/globals.css';
import { Layout, CustomCursor } from '@/components';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', 'dark');
			document.body.classList.add('dark');
		} else if (localStorage.getItem('theme') === 'light') {
			document.body.classList.add('light');
		} else {
			document.body.classList.add('dark');
		}
	}, []);

	return (
		<Layout>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' rel='stylesheet' />
			</Head>
			<CustomCursor />
			<Component {...pageProps} />
		</Layout>
	);
}
