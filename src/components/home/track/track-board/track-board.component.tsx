import React, { useState } from 'react';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusSmIcon,
} from '@heroicons/react/solid';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import BoardModal from './board-modal.component';

interface RootState {
  utils: any;
  track: any;
}

const TrackBoard = () => {
  const modal = useAppSelector((state: RootState) => state.utils.modal);
  const wishlistContent = useAppSelector(
    (state: RootState) => state.track.wishlistContent
  );
  const appliedContent = useAppSelector(
    (state: RootState) => state.track.appliedContent
  );
  const interviewContent = useAppSelector(
    (state: RootState) => state.track.interviewContent
  );
  const offerContent = useAppSelector(
    (state: RootState) => state.track.offerContent
  );
  const rejectedContent = useAppSelector(
    (state: RootState) => state.track.rejectedContent
  );
  const handleOpenModal = () => useAppDispatch(setModal(true));
  const handleCloseModal = () => useAppDispatch(setModal(false));

  const [appliedOpen, setAppliedOpen] = useState(false);
  const [interviewOpen, setInterviewOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [rejectedOpen, setRejectedOpen] = useState(false);

  return (
    <main>
      {/* modal */}
      <Modal open={modal} onClose={handleCloseModal}>
        <>{<BoardModal />}</>
      </Modal>

      {/* board */}
      <div className='pt-6 px-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>
        <div className=''>
          <button
            className='flex justify-between font-semibold py-3 bg-gray-300/50 shadow-md px-3 items-center rounded-lg w-full'
            onClick={() => setWishlistOpen(!wishlistOpen)}
          >
            <span className='flex justify-start items-center'>Wishlist</span>
            <span className='flex justify-end items-center gap-2'>
              <span className='h-7 w-7 bg-white shadow-md rounded-full cursor-pointer'>
                {wishlistOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </span>
          </button>
          {wishlistOpen && (
            <div className='mt-4 flex flex-col space-y-4 border-gray-400/50 border-4 rounded-lg border-dashed p-4'>
              <span className='font-light text-xs flex justify-end'>
                ({wishlistContent.length}) items
              </span>
            </div>
          )}
        </div>
        <div className=''>
          <button
            className='flex justify-between font-semibold py-3 bg-orange-300 shadow-md px-3 items-center rounded-lg w-full'
            onClick={() => setAppliedOpen(!appliedOpen)}
          >
            <span className='flex justify-start items-center'>Applied</span>
            <span className='flex justify-end items-center gap-1'>
              <span className='h-7 w-7 bg-white shadow-md rounded-full cursor-pointer'>
                {appliedOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </span>
          </button>
          {appliedOpen && (
            <div className='mt-4 flex flex-col space-y-4 border-orange-400/50 border-4 rounded-lg border-dashed p-4'>
              <span className='font-light text-xs flex justify-end'>
                ({appliedContent.length}) items
              </span>
            </div>
          )}
        </div>
        <div className=''>
          <button
            className='flex justify-between font-semibold py-3 bg-blue-300 shadow-md px-3 items-center rounded-lg w-full'
            onClick={() => setInterviewOpen(!interviewOpen)}
          >
            <span className='flex justify-start items-center'>Interview</span>
            <span className='flex justify-end items-center gap-2'>
              <span className='h-7 w-7 bg-white shadow-md rounded-full cursor-pointer'>
                {interviewOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </span>
          </button>
          {interviewOpen && (
            <div className='mt-4 flex flex-col space-y-4 border-blue-400/50 border-4 rounded-lg border-dashed p-4'>
              <span className='font-light text-xs flex justify-end '>
                ({interviewContent.length}) items
              </span>
            </div>
          )}
        </div>
        <div className=''>
          <button
            className='flex justify-between font-semibold py-3 bg-green-300 shadow-md px-3 items-center rounded-lg w-full'
            onClick={() => setOfferOpen(!offerOpen)}
          >
            <span className='flex justify-start items-center'>Offer</span>
            <span className='flex justify-end items-center gap-2'>
              <span className='h-7 w-7 bg-white shadow-md rounded-full cursor-pointer'>
                {offerOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </span>
          </button>
          {offerOpen && (
            <div className='mt-4 flex flex-col space-y-4 border-green-400/50 border-4 rounded-lg border-dashed p-4'>
              <span className='font-light text-xs flex justify-end'>
                ({offerContent.length}) items
              </span>
            </div>
          )}
        </div>
        <div className=''>
          <button
            className='flex justify-between font-semibold py-3 bg-red-300 shadow-md px-3 items-center rounded-lg w-full'
            onClick={() => setRejectedOpen(!rejectedOpen)}
          >
            <span className='flex justify-start items-center'>Rejected</span>
            <span className='flex justify-end items-center gap-2'>
              <span className='h-7 w-7 bg-white shadow-md rounded-full cursor-pointer'>
                {rejectedOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </span>
          </button>
          {rejectedOpen && (
            <div className='mt-4 flex flex-col space-y-4 border-red-400/50 border-4 rounded-lg border-dashed p-4'>
              <span className='font-light text-xs flex justify-end'>
                ({rejectedContent.length}) items
              </span>
            </div>
          )}
        </div>
      </div>

      {/* plan post button */}
      {!modal && (
        <div className='flex justify-end pr-10'>
          <div className='fixed bottom-16 z-30 pt-36 lg:pb-10 lg:bottom-0 items-center px-6 py-5'>
            <button
              type='submit'
              className='relative inline-flex flex-initial items-center justify-center rounded-3xl bg-gradient-to-r from-gradient1 to-gradient2 px-5 py-2 font-semibold leading-6 text-white shadow-md'
              onClick={() => handleOpenModal()}
            >
              <PlusSmIcon className='h-6 w-6' />
              Add
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default TrackBoard;
