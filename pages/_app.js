import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>NidhiSanchay</title>
      <meta name="author" content="Inderjit Shahi" />
      <meta name="description" content="NidhiSanchay is an innovative web application empowering communities and individuals in India to save collectively. Join savings groups, pool monthly contributions, and support each other's financial goals. Foster a habit of consistent savings and build financial security. Transparent and user-friendly, NidhiSanchay promotes financial empowerment and inclusivity." />
    </Head>
    <Component {...pageProps} />

  </>

}
