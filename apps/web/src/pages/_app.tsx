import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';
import 'overlayscrollbars/css/overlayscrollbars.min.css';

import type {AppProps} from 'next/app';
import {ThemeProvider, useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {WagmiProvider, Layout, Navbar} from 'ui';
import {Sidebar} from '../components';

import React from 'react';
import Head from 'next/head';
import Wrapper from '../components/Wrapper';

export default function MyApp({Component, pageProps}: AppProps) {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>{Component.displayName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WagmiProvider>
        <ThemeProvider attribute="class">
          {pageLoaded && <Wrapper>{<Component {...pageProps} />}</Wrapper>}
        </ThemeProvider>
      </WagmiProvider>
    </>
  );
}
