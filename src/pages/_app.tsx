import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo-config'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />
      </Head>
      <NextNProgress
        color="#e20e8d"
        startPosition={0.3}
        height={3}
        stopDelayMs={200}
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
