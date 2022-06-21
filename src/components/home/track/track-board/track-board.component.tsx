import React, { useState } from 'react';

import { PlusSmIcon } from '@heroicons/react/solid';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import BoardModal from './board-modal.component';
import Category from './category.component';

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

      {/* category board */}
      <div className='pt-6 px-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>
        <Category
          title='Wishlist'
          backgroundColor='gray'
          borderColor='gray'
          setCategoryOpen={setWishlistOpen}
          categoryOpen={wishlistOpen}
          categoryContent={wishlistContent}
        >
          asdf
        </Category>
        <Category
          title='Applied'
          backgroundColor='orange'
          borderColor='orange'
          setCategoryOpen={setAppliedOpen}
          categoryOpen={appliedOpen}
          categoryContent={appliedContent}
        >
          asdf
        </Category>
        <Category
          title='Interview'
          backgroundColor='blue'
          borderColor='blue'
          setCategoryOpen={setInterviewOpen}
          categoryOpen={interviewOpen}
          categoryContent={interviewContent}
        >
          asdf
        </Category>
        <Category
          title='Offer'
          backgroundColor='green'
          borderColor='green'
          setCategoryOpen={setOfferOpen}
          categoryOpen={offerOpen}
          categoryContent={offerContent}
        >
          asdf
        </Category>
        <Category
          title='Rejected'
          backgroundColor='red'
          borderColor='red'
          setCategoryOpen={setRejectedOpen}
          categoryOpen={rejectedOpen}
          categoryContent={rejectedContent}
        >
          asdf
        </Category>
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
