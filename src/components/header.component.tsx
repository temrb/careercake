import React from 'react';
import Link from 'next/link';
// import CopyAILogo from '../../public/assets/logos/copyai.logo'
// import { motion } from 'framer-motion'
// import { useSession } from '../context/AuthContext'

const Header = () => {
  return (
    <header className='lg:sticky top-0 z-20 lg:flex lg:h-16 items-center lg:justify-between justify-center lg:px-6 gap-12'>
      <div className='lg:flex hidden items-center font-Fascinate text-xl text-accent1 justify-start w-full'>
        CareerCake
      </div>
      <div className='lg:flex hidden justify-end w-full'>Log Out</div>
    </header>
  );
};

export default Header;
