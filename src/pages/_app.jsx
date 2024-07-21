import '@/styles/globals.css';
import { Layout, CustomCursor } from '@/components';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
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
