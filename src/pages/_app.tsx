import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/layout.component';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Head from 'next/head';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import AuthContext from '../context/AuthContext';

Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <NextNProgress />
        <AuthContext>
          <Layout>
            <Head>
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </AuthContext>
      </Provider>
    </React.StrictMode>
  );
}

export default MyApp;
