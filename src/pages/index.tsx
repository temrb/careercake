import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Home from '../components/home/home.component';
import MenuButtons from '../components/menu-buttons.component';
import Header from '../components/header.component';
import { useSession } from '../context/AuthContext';
import SignUpAuth from '../components/auth/sign-up/signupauth.component';
import SignInAuth from '../components/auth/sign-in/signinauth.component';
import { useAppSelector } from '../hooks/useRedux';

interface RootState {
  auth: any;
}

const Index: NextPage = () => {
  const { user } = useSession();

  const signUp = useAppSelector((state: RootState) => state.auth.signUp);

  return (
    <div className='min-h-screen'>
      <Head>
        <title>CareerCake</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {user ? (
        <>
          {/* header */}
          <Header />

          {/* menu buttons */}
          <MenuButtons />
          {/* home component */}
          <Home />
        </>
      ) : signUp ? (
        <SignUpAuth />
      ) : (
        <SignInAuth />
      )}
    </div>
  );
};

export default Index;
