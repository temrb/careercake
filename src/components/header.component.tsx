import React from 'react';
import { Auth } from 'aws-amplify';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import {
  setOpenTrack,
  setOpenBuild,
  setOpenSearch,
  setOpenAccount,
} from '../redux/features/menuSlice';
import {
  AnnotationIcon,
  PencilIcon,
  PencilAltIcon,
  ClipboardIcon,
  ClipboardListIcon,
  ChatAlt2Icon,
  UserCircleIcon,
  CogIcon,
} from '@heroicons/react/solid';

interface RootState {
  menu: any;
}

const Header = () => {
  const build = useAppSelector((state: RootState) => state.menu.openBuild);
  const track = useAppSelector((state: RootState) => state.menu.openTrack);
  const search = useAppSelector((state: RootState) => state.menu.openSearch);
  const account = useAppSelector((state: RootState) => state.menu.openAccount);

  const handleBuild = () => {
    useAppDispatch(setOpenBuild(true));
    useAppDispatch(setOpenTrack(false));
    useAppDispatch(setOpenSearch(false));
    useAppDispatch(setOpenAccount(false));
  };

  const handleTrack = () => {
    useAppDispatch(setOpenTrack(true));
    useAppDispatch(setOpenSearch(false));
    useAppDispatch(setOpenBuild(false));
    useAppDispatch(setOpenAccount(false));
  };

  const handleSearch = () => {
    useAppDispatch(setOpenSearch(true));
    useAppDispatch(setOpenAccount(false));
    useAppDispatch(setOpenTrack(false));
    useAppDispatch(setOpenBuild(false));
  };
  const handleAccount = () => {
    useAppDispatch(setOpenAccount(true));
    useAppDispatch(setOpenSearch(false));
    useAppDispatch(setOpenTrack(false));
    useAppDispatch(setOpenBuild(false));
  };

  return (
    <header className='lg:sticky top-0 z-20 lg:flex lg:h-16 items-center lg:justify-between justify-center lg:px-6'>
      <div className='lg:flex hidden items-center font-Fascinate text-xl text-accent1 justify-start w-full'>
        CareerCake
      </div>
      <div className='lg:flex lg:gap-2 hidden'>
        <button
          className={` flex ${
            build
              ? 'text-accent2 '
              : 'bg-white text-gray-400 transition duration-300 ease-in-out hover:text-accent2'
          } items-center justify-center gap-1 px-2 py-5 text-lg font-semibold`}
          onClick={handleBuild}
        >
          <span className='h-5 w-5 lg:inline-flex hidden'>
            {build ? <PencilAltIcon /> : <PencilIcon />}
          </span>
          Build
        </button>
        <button
          className={` flex ${
            track
              ? 'text-accent2'
              : 'bg-white text-gray-400 transition duration-300 ease-in-out hover:text-accent2'
          } items-center justify-center gap-1 py-5 text-lg font-semibold`}
          onClick={handleTrack}
        >
          <span className='h-5 w-5 lg:inline-flex hidden'>
            {track ? <ClipboardListIcon /> : <ClipboardIcon />}
          </span>
          Track
        </button>
        <button
          className={` flex ${
            search
              ? 'text-accent2'
              : 'bg-white text-gray-400 transition duration-300 ease-in-out hover:text-accent2'
          } items-center justify-center gap-1 px-2 py-5 text-lg font-semibold`}
          onClick={handleSearch}
        >
          <span className='h-5 w-5 lg:inline-flex hidden'>
            {search ? <ChatAlt2Icon /> : <AnnotationIcon />}
          </span>
          Search
        </button>
        <button
          className={` flex ${
            account
              ? 'text-accent2'
              : 'bg-white text-gray-400 transition duration-300 ease-in-out hover:text-accent2'
          } items-center justify-center gap-1 px-2 py-5 text-lg font-semibold`}
          onClick={handleAccount}
        >
          <span className='h-5 w-5 lg:inline-flex hidden'>
            {account ? <CogIcon /> : <UserCircleIcon />}
          </span>
          Account
        </button>
      </div>
    </header>
  );
};

export default Header;
