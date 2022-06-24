import React from 'react';
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
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import {
  setOpenTrack,
  setOpenBuild,
  setOpenSearch,
  setOpenAccount,
} from '../redux/features/menuSlice';

interface RootState {
  menu: any;
}

const MenuButtons = () => {
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
    <div className='fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 h-16 lg:hidden'>
      <button
        className={` flex ${
          build
            ? 'bg-accent2 text-white '
            : 'bg-white text-gray-400 ring-accent2 transition duration-300 ease-in-out hover:text-accent2 hover:ring-4 hover:ring-inset'
        } items-center justify-center gap-1 px-2 py-5 text-lg font-semibold`}
        onClick={handleBuild}
      >
        <span className='h-5 w-5 lg:inline-flex hidden'>
          {build ? <PencilAltIcon /> : <PencilIcon />}
        </span>
        Build
      </button>
      <button
        className={` focus:z-2 flex ${
          track
            ? 'bg-accent2 text-white'
            : 'bg-white text-gray-400 ring-accent2 transition duration-300 ease-in-out hover:text-accent2 hover:ring-4 hover:ring-inset'
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
            ? 'bg-accent2 text-white'
            : 'bg-white text-gray-400 ring-accent2 transition duration-300 ease-in-out hover:text-accent2 hover:ring-4 hover:ring-inset'
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
            ? 'bg-accent2 text-white'
            : 'bg-white text-gray-400 ring-accent2 transition duration-300 ease-in-out hover:text-accent2 hover:ring-4 hover:ring-inset'
        } items-center justify-center gap-1 px-2 py-5 text-lg font-semibold`}
        onClick={handleAccount}
      >
        <span className='h-5 w-5 lg:inline-flex hidden'>
          {account ? <CogIcon /> : <UserCircleIcon />}
        </span>
        Account
      </button>
    </div>
  );
};

export default MenuButtons;
