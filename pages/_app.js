import '@/styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store'; // Import persistor and store from redux/store
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate

export default function App({ Component, pageProps }) {
  return <div className='bg-bg min-h-screen'>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>NidhiSanchay</title>
      <meta name="author" content="Inderjit Shahi" />
      <meta name="description" content="NidhiSanchay is an innovative web application empowering communities and individuals in India to save collectively. Join savings groups, pool monthly contributions, and support each other's financial goals. Foster a habit of consistent savings and build financial security. Transparent and user-friendly, NidhiSanchay promotes financial empowerment and inclusivity." />
    </Head>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Wrap the application with PersistGate */}
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </PersistGate>
    </Provider>
  </div>

}
