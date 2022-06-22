import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Home from '../components/home/home.component';
import MenuButtons from '../components/menu-buttons.component';
import Header from '../components/header.component';
import { useSession } from '../context/AuthContext';

const Index: NextPage = () => {
  const { user } = useSession();

  return (
    <div className='min-h-screen'>
      <Head>
        <title>CareerCake</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header */}
      <Header />

      {/* menu buttons */}
      <MenuButtons />

      {/* home component */}
      <Home />
    </div>
  );
};

export default Index;
