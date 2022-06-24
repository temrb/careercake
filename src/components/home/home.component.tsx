import React from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import Build from './build/build.component';
import Track from './track/track.component';
import Search from './search/search.component';
import Account from './account/account.component';

interface RootState {
  menu: any;
}

const Home = () => {
  const build = useAppSelector((state: RootState) => state.menu.openBuild);
  const track = useAppSelector((state: RootState) => state.menu.openTrack);
  const search = useAppSelector((state: RootState) => state.menu.openSearch);
  const account = useAppSelector((state: RootState) => state.menu.openAccount);

  return (
    <div className='relative mx-auto max-w-screen lg:pl-40'>
      <div className='grid-col-1 grid'>
        {/* build */}
        <div
          className={`${build ? '' : 'hidden'} overflow-auto `}
          id='drawerSection'
        >
          <Build />
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
