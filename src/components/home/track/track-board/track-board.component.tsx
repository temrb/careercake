import React, { useState, useEffect } from 'react';
import { OfficeBuildingIcon, BriefcaseIcon } from '@heroicons/react/solid';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import { setCategoryInput } from '../../../../redux/features/trackSlice';
import BoardModal from './board-modal.component';
import Category from './category.component';
import { API } from 'aws-amplify';
import { listCards } from '../../../../graphql/queries';
import { Card, ListCardsQuery } from '../../../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

interface RootState {
  utils: any;
}

const TrackBoard = () => {
  const modal = useAppSelector((state: RootState) => state.utils.modal);
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
          contentBorderColor='border-gray-400/50'
          contentHeadingColor='text-gray-500'
          setCategoryOpen={setWishlistOpen}
          categoryOpen={wishlistOpen}
          contentCount={cards.filter((card) => card.category === 'Wishlist')}
        >
          {cards
            .filter((card) => card.category === 'Wishlist')
            .map((category) => (
              <div
                key={category.id}
                className='bg-gray-400/50 p-2 rounded-md bg-white'
              >
                <div className='grid space-y-1'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white p-1 rounded-lg'>
                      <BriefcaseIcon className='h-4' />
                    </div>
                    <h1 className='flex font-semibold text-ellipsis'>
                      {category.job}
                    </h1>
                  </div>
                  <div className='flex '>
                    <div className='flex items-center gap-2'>
                      <div className='bg-white p-1 rounded-lg'>
                        <OfficeBuildingIcon className='h-4' />
                      </div>
                      <h2 className='flex text-ellipsis text-sm'>
                        {category.company}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Category>
        <Category
          title='Applied'
          backgroundColor='bg-orange-500/80'
          contentBorderColor='border-orange-400/50'
          contentHeadingColor='text-orange-500'
          setCategoryOpen={setAppliedOpen}
          categoryOpen={appliedOpen}
          contentCount={cards.filter((card) => card.category === 'Applied')}
        >
          {cards
            .filter((card) => card.category === 'Applied')
            .map((category) => (
              <div
                key={category.id}
                className='bg-orange-400/50 p-2 rounded-md bg-white'
              >
                <div className='grid space-y-1'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white p-1 rounded-lg'>
                      <BriefcaseIcon className='h-4' />
                    </div>
                    <h1 className='flex font-semibold text-ellipsis'>
                      {category.job}
                    </h1>
                  </div>
                  <div className='flex '>
                    <div className='flex items-center gap-2'>
                      <div className='bg-white p-1 rounded-lg'>
                        <OfficeBuildingIcon className='h-4' />
                      </div>
                      <h2 className='flex text-ellipsis text-sm'>
                        {category.company}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Category>
        <Category
          title='Interview'
          backgroundColor='bg-blue-500/80'
          contentBorderColor='border-blue-400/50'
          contentHeadingColor='text-blue-500'
          setCategoryOpen={setInterviewOpen}
          categoryOpen={interviewOpen}
          contentCount={cards.filter((card) => card.category === 'Interview')}
        >
          {cards
            .filter((card) => card.category === 'Interview')
            .map((category) => (
              <div
                key={category.id}
                className='bg-blue-400/50 p-2 rounded-md bg-white'
              >
                <div className='grid space-y-1'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white p-1 rounded-lg'>
                      <BriefcaseIcon className='h-4' />
                    </div>
                    <h1 className='flex font-semibold text-ellipsis'>
                      {category.job}
                    </h1>
                  </div>
                  <div className='flex '>
                    <div className='flex items-center gap-2'>
                      <div className='bg-white p-1 rounded-lg'>
                        <OfficeBuildingIcon className='h-4' />
                      </div>
                      <h2 className='flex text-ellipsis text-sm'>
                        {category.company}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Category>
        <Category
          title='Offer'
          backgroundColor='bg-green-500/80'
          contentBorderColor='border-green-400/50'
          contentHeadingColor='text-green-500'
          setCategoryOpen={setOfferOpen}
          categoryOpen={offerOpen}
          contentCount={cards.filter((card) => card.category === 'Offer')}
        >
          {cards
            .filter((card) => card.category === 'Offer')
            .map((category) => (
              <div
                key={category.id}
                className='bg-green-400/50 p-2 rounded-md bg-white'
              >
                <div className='grid space-y-1'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white p-1 rounded-lg'>
                      <BriefcaseIcon className='h-4' />
                    </div>
                    <h1 className='flex font-semibold text-ellipsis'>
                      {category.job}
                    </h1>
                  </div>
                  <div className='flex '>
                    <div className='flex items-center gap-2'>
                      <div className='bg-white p-1 rounded-lg'>
                        <OfficeBuildingIcon className='h-4' />
                      </div>
                      <h2 className='flex text-ellipsis text-sm'>
                        {category.company}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Category>
        <Category
          title='Rejected'
          backgroundColor='bg-red-500/80'
          contentBorderColor='border-red-400/50'
          contentHeadingColor='text-red-500'
          setCategoryOpen={setRejectedOpen}
          categoryOpen={rejectedOpen}
          contentCount={cards.filter((card) => card.category === 'Rejected')}
        >
          {cards
            .filter((card) => card.category === 'Rejected')
            .map((category) => (
              <div
                key={category.id}
                className='bg-red-400/50 p-2 rounded-md bg-white'
              >
                <div className='grid space-y-1'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white p-1 rounded-lg'>
                      <BriefcaseIcon className='h-4' />
                    </div>
                    <h1 className='flex font-semibold text-ellipsis'>
                      {category.job}
                    </h1>
                  </div>
                  <div className='flex '>
                    <div className='flex items-center gap-2'>
                      <div className='bg-white p-1 rounded-lg'>
                        <OfficeBuildingIcon className='h-4' />
                      </div>
                      <h2 className='flex text-ellipsis text-sm'>
                        {category.company}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Category>
      </div>
    </main>
  );
};

export default TrackBoard;
