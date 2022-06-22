import React from 'react';
import Link from 'next/link';
import { Auth } from 'aws-amplify';

const Header = () => {
  return (
    <header className='lg:sticky top-0 z-20 lg:flex lg:h-16 items-center lg:justify-between justify-center lg:px-6 gap-12'>
      <div className='lg:flex hidden items-center font-Fascinate text-xl text-accent1 justify-start w-full'>
        CareerCake
      </div>
      <button
        className='lg:flex hidden justify-end w-full'
        onClick={() => Auth.signOut()}
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
