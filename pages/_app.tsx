import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
