import React from 'react';
import Resume from './resume/resume.component';
import Track from './track/track.component';
import Search from './search/search.component';
import Account from './account/account.component';
import { useAppSelector } from '../../hooks/useRedux';

interface RootState {
  menu: any;
}

const Home = () => {
  const resume = useAppSelector((state: RootState) => state.menu.openResume);
  const track = useAppSelector((state: RootState) => state.menu.openTrack);
  const search = useAppSelector((state: RootState) => state.menu.openSearch);
  const account = useAppSelector((state: RootState) => state.menu.openAccount);

  return (
    <div className='relative mx-auto max-w-screen'>
      <div className='grid-col-1 grid'>
        {/* resume */}
        <div
          className={`${resume ? '' : 'hidden'} overflow-auto `}
          id='drawerSection'
        >
          <Resume />
        </div>
        {/* track */}
        <div className={`${track ? '' : 'hidden'} overflow-auto `}>
          <Track />
        </div>
        {/* search */}
        <div className={`${search ? '' : 'hidden'} overflow-auto `}>
          <Search />
        </div>
        {/* account */}
        <div className={`${account ? '' : 'hidden'} overflow-auto `}>
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Home;
