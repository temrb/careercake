import React, { useState, useEffect } from 'react';
import { PlusSmIcon } from '@heroicons/react/solid';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import BoardModal from './board-modal.component';
import Category from './category.component';
import { API } from 'aws-amplify';
import { listCards } from '../../../../graphql/queries';
import { Card, ListCardsQuery } from '../../../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

interface RootState {
  utils: any;
  track: any;
}

const TrackBoard = () => {
  const modal = useAppSelector((state: RootState) => state.utils.modal);
  const handleOpenModal = () => useAppDispatch(setModal(true));
  const handleCloseModal = () => useAppDispatch(setModal(false));

  const [appliedOpen, setAppliedOpen] = useState(false);
  const [interviewOpen, setInterviewOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [rejectedOpen, setRejectedOpen] = useState(false);

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCardsFromApi = async (): Promise<Card[]> => {
      const allCards = (await API.graphql({
        query: listCards,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as {
        data: ListCardsQuery;
        errors: any[];
      };
      if (allCards.data) {
        setCards(allCards.data.listCards?.items as Card[]);
        return allCards.data.listCards?.items as Card[];
      } else {
        setCards([]);
        throw new Error('Could not get cards');
      }
    };
    fetchCardsFromApi();
  }, []);

  console.log('cards', cards);

  return (
    <main>
      {/* modal */}
      <Modal open={modal} onClose={handleCloseModal}>
        <>{<BoardModal />}</>
      </Modal>

      {/* category board */}
      <div className='pt-6 px-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 overflow-auto'>
        <Category
          title='Wishlist'
          backgroundColor='bg-gray-400/80'
          borderColor='border-gray-400/50'
          setCategoryOpen={setWishlistOpen}
          categoryOpen={wishlistOpen}
          categoryContent={cards.filter((card) => card.category === 'Wishlist')}
        >
          {cards
            .filter((card) => card.category === 'Wishlist')
            .map((card) => (
              <div className='flex flex-col justify-center items-center'>
                {card.job}
              </div>
            ))}
        </Category>
        <Category
          title='Applied'
          backgroundColor='bg-orange-500/80'
          borderColor='border-orange-400/50'
          setCategoryOpen={setAppliedOpen}
          categoryOpen={appliedOpen}
          categoryContent={cards.filter((card) => card.category === 'Applied')}
        >
          {cards
            .filter((card) => card.category === 'Applied')
            .map((card) => (
              <div className='flex flex-col justify-center items-center'>
                {card.job}
              </div>
            ))}
        </Category>
        <Category
          title='Interview'
          backgroundColor='bg-blue-500/80'
          borderColor='border-blue-400/50'
          setCategoryOpen={setInterviewOpen}
          categoryOpen={interviewOpen}
          categoryContent={cards.filter(
            (card) => card.category === 'Interview'
          )}
        >
          {cards
            .filter((card) => card.category === 'Interview')
            .map((card) => (
              <div className='flex flex-col justify-center items-center'>
                {card.job}
              </div>
            ))}
        </Category>
        <Category
          title='Offer'
          backgroundColor='bg-green-500/80'
          borderColor='border-green-400/50'
          setCategoryOpen={setOfferOpen}
          categoryOpen={offerOpen}
          categoryContent={cards.filter((card) => card.category === 'Offer')}
        >
          {cards
            .filter((card) => card.category === 'Offer')
            .map((card) => (
              <div className='flex flex-col justify-center items-center'>
                {card.job}
              </div>
            ))}
        </Category>
        <Category
          title='Rejected'
          backgroundColor='bg-red-500/80'
          borderColor='border-red-400/50'
          setCategoryOpen={setRejectedOpen}
          categoryOpen={rejectedOpen}
          categoryContent={cards.filter((card) => card.category === 'Rejected')}
        >
          {cards
            .filter((card) => card.category === 'Rejected')
            .map((card) => (
              <div className='flex flex-col justify-center items-center'>
                {card.job}
              </div>
            ))}
        </Category>
      </div>

      {/* plan post button */}
      {!modal && (
        <div className='flex justify-end pr-10'>
          <div className='fixed bottom-14 z-30 pt-36 lg:pb-10 lg:bottom-0 items-center px-6 py-4'>
            <button
              type='submit'
              className='relative inline-flex flex-initial items-center justify-center rounded-3xl bg-gradient-to-r from-gradient1 to-gradient2 px-4 py-3 font-bold leading-6 text-white shadow-md'
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
