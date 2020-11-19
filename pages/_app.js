import Head from 'next/head'
import '../styles/globals.css'
import 'uikit'

function MyApp({ Component, pageProps }) {

  return <div>
    <Head>
      <title>Artepan Chine</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
