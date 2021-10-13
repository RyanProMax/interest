import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';
import { basePath } from '../settings';
import '../src/styles/index.less';
import { useViewport, useGetDevice } from '../src/utils/index';

const BREAK_POINT = 750;

function App({ Component, pageProps }) {
  const router = useRouter();
  const { route } = router;
  const path = route.split('/');
  const subTitle = path[1];
  const blackList = ['/', '/home', '/temp'];
  const useLayout = !blackList.includes(route);
  const { width } = useViewport();
  const { isMobile, model } = useGetDevice();
  const isNarrow = width < BREAK_POINT;

  const props = {
    ...pageProps,
    router,
    isMobile,
    isNarrow,
    model,
    width
  };

  return (
    <>
      <Head>
        <title>{subTitle ? `${subTitle} | ` : null}Ryan&#39;s Blog</title>
        <meta name="description" content="Record every interesting example" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      {useLayout ? (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      ) : (
        <Component {...props} />
      )}
    </>
  );
}

export default App;
