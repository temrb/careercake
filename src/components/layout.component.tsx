import React from 'react';
import Loading from '../components/utils/loading.component';
import { useSession } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  // const { loading } = useSession();

  return (
    <div className='min-h-screen bg-white text-gray-700 font-Poppins'>
      {children}
    </div>
  );
};

export default Layout;
