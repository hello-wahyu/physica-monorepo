import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to azula!</title>
      </Head>
      <div className="app">
        {/* <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to azula!</h1>
        </header> */}
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
