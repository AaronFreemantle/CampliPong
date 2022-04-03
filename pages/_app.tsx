import { SessionProvider } from 'next-auth/react'
import { AppProps } from "next/app";
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Camplipong</title>
        <meta name='description' content='Camplify Ping Pong Leaderboard'/>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
