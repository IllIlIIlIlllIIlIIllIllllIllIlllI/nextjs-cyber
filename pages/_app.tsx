import '@/css/tailwind.css';
import '@/css/twemoji.css';
import '@/css/resume.css';
import '@/css/about.css';
import '@/css/prism.css';
import 'katex/dist/katex.css';
import '@/css/cyberpunk.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import siteMetadata from '@/data/siteMetadata';
import { SearchProvider } from 'pliny/search';
import LayoutWrapper from '@/components/LayoutWrapper';

// suppress useLayoutEffect warnings when running outside a browser
if (!process.browser) React.useLayoutEffect = React.useEffect;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <SearchProvider searchConfig={siteMetadata.search}>
          <Component {...pageProps} />
        </SearchProvider>
      </LayoutWrapper>
    </ThemeProvider>
  );
}
