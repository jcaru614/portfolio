import '@/styles/globals.css';
import { Layout, CustomCursor } from '@/components';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<CustomCursor />
			<Component {...pageProps} />
		</Layout>
	);
}
