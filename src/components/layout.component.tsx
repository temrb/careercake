import React from 'react'
// import { useSession } from '../context/AuthContext'
import Loading from '../components/utils/loading.component'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  // const session = useSession()

  return (
    <div className='min-h-screen bg-white text-gray-700 font-Poppins'>
      {children}
    </div>
  );
}

export default Layout
