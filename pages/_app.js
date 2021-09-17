import Head from 'next/head';
import { useRouter } from 'next/router';
import { basePath } from '../settings';
import '../styles/globals.less';

function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath.split('/');
  const subTitle = path[1];

  return (
    <>
      <Head>
        <title>{subTitle ? `${subTitle} | ` : null}Interest</title>
        <meta name='description' content='Record every interesting case' />
        <link rel='icon' href={`${basePath}/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
