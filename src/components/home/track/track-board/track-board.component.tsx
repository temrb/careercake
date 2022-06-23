import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import BoardModal from './board-modal.component';
import Category from './category.component';
import { API } from 'aws-amplify';
import { listCards } from '../../../../graphql/queries';
import { Card, ListCardsQuery } from '../../../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { DragDropContext } from 'react-beautiful-dnd';

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

  function reduce(arg0: (acc: Card[], card: Card) => Card[], cards: Card[]) {
    throw new Error('Function not implemented.');
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const newCards = reduce((acc: Card[], card: Card) => {
      if (card.id === result.draggableId) {
        acc.push(card);
      }
      return acc;
    }, cards);
  };

  return (
    <main>
      {/* modal */}
      <Modal open={modal} onClose={handleCloseModal}>
        <>{<BoardModal />}</>
      </Modal>
      {/* category board */}
      <div className='pt-6 px-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 overflow-auto'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Category
            title='Wishlist'
            backgroundColor='bg-gray-400'
            contentBorderColor='border-gray-400/50'
            contentHeadingColor='text-gray-500'
            setCategoryOpen={setWishlistOpen}
            categoryOpen={wishlistOpen}
            cards={cards.filter((card) => card.category === 'Wishlist')}
            cardColor='bg-gray-400/50'
          />
          <Category
            title='Applied'
            backgroundColor='bg-orange-500/80'
            contentBorderColor='border-orange-400/50'
            contentHeadingColor='text-orange-500'
            setCategoryOpen={setAppliedOpen}
            categoryOpen={appliedOpen}
            cards={cards.filter((card) => card.category === 'Applied')}
            cardColor='bg-orange-400/50'
          />
          <Category
            title='Interview'
            backgroundColor='bg-blue-500/80'
            contentBorderColor='border-blue-400/50'
            contentHeadingColor='text-blue-500'
            setCategoryOpen={setInterviewOpen}
            categoryOpen={interviewOpen}
            cards={cards.filter((card) => card.category === 'Applied')}
            cardColor='bg-blue-400/50'
          />
          <Category
            title='Offer'
            backgroundColor='bg-green-500/80'
            contentBorderColor='border-green-400/50'
            contentHeadingColor='text-green-500'
            setCategoryOpen={setOfferOpen}
            categoryOpen={offerOpen}
            cards={cards.filter((card) => card.category === 'Offer')}
            cardColor='bg-green-400/50'
          />
          <Category
            title='Rejected'
            backgroundColor='bg-red-500/80'
            contentBorderColor='border-red-400/50'
            contentHeadingColor='text-red-500'
            setCategoryOpen={setRejectedOpen}
            categoryOpen={rejectedOpen}
            cards={cards.filter((card) => card.category === 'Rejected')}
            cardColor='bg-red-400/50'
          />
        </DragDropContext>
      </div>
    </main>
  );
};

export default TrackBoard;
