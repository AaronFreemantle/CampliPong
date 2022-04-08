import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import GlobalStyle from "../components/styles/Global";

const theme = {
  colors: {
    dark: "#004F92",
    medium: "#297AC3",
    light: "#27A1EE",
    lightest: "#C2E1F6",
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Head>
              <title>Camplipong</title>
              <meta
                name="description"
                content="Camplify Ping Pong Leaderboard"
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default App;
