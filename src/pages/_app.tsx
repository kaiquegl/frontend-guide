import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from 'styles/global';
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>KGL - Portfolio</title>
        <meta name="description" content="A frontend portfolio or how I like to say, a frontend guide" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
