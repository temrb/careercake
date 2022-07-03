import React from 'react';
import {
  PencilIcon,
  PencilAltIcon,
  ClipboardIcon,
  ClipboardListIcon,
  UserCircleIcon,
  CogIcon,
} from '@heroicons/react/solid';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import {
  setOpenTrack,
  setOpenResume,
  setOpenAccount,
} from '../redux/features/menuSlice';

interface RootState {
  menu: any;
}

const MenuButtons = () => {
  const resume = useAppSelector((state: RootState) => state.menu.openResume);
  const track = useAppSelector((state: RootState) => state.menu.openTrack);
  const account = useAppSelector((state: RootState) => state.menu.openAccount);

  const handleResume = () => {
    useAppDispatch(setOpenResume(true));
    useAppDispatch(setOpenTrack(false));
    useAppDispatch(setOpenAccount(false));
  };

  const handleTrack = () => {
    useAppDispatch(setOpenTrack(true));
    useAppDispatch(setOpenResume(false));
    useAppDispatch(setOpenAccount(false));
  };
  const handleAccount = () => {
    useAppDispatch(setOpenAccount(true));
    useAppDispatch(setOpenTrack(false));
    useAppDispatch(setOpenResume(false));
  };

  return (
    <div className='fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 h-16 lg:hidden'>
      <button
        className={` flex ${
          resume
            ? 'bg-accent2 text-white '
            : 'bg-white text-gray-400 ring-accent2 transition duration-300 ease-in-out hover:text-accent2 hover:ring-4 hover:ring-inset'
        } items-center justify-center gap-1 px-2 py-5 text-lg font-semibold`}
        onClick={handleResume}
      >
        <span className='h-5 w-5 lg:inline-flex hidden'>
          {resume ? <PencilAltIcon /> : <PencilIcon />}
        </span>
        Resume
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
