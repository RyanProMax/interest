import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { basePath } from '../settings';
import '../styles/index.less';

function App({ Component, pageProps }) {
	const router = useRouter();
	const { route } = router;
	const path = route.split('/');
	const subTitle = path[1];
	const blackList = ['/', '/home'];
	const useLayout = !blackList.includes(route);

	return (
		<>
			<Head>
				<title>{subTitle ? `${subTitle} | ` : null}Interest</title>
				<meta name="description" content="Record every interesting case" />
				<link rel="icon" href={`${basePath}/favicon.ico`} />
			</Head>
			{useLayout ? (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default App;
