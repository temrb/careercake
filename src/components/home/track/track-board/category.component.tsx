import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useAppDispatch } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import { setCategoryInput } from '../../../../redux/features/trackSlice';
import { OfficeBuildingIcon, BriefcaseIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { Draggable, Droppable } from 'react-beautiful-dnd';

interface Props {
  title: string;
  subtitle: string;
  backgroundColor: string;
  contentBorderColor: string;
  contentHeadingColor: string;
  setCategoryOpen: any;
  categoryOpen: boolean;
  cards: any;
  cardColor: string;
}

const Category = (Props: Props) => {
  const handleOpenModal = () => {
    useAppDispatch(setModal(true));
    useAppDispatch(setCategoryInput(Props.title));
  };
  return (
    <Droppable droppableId={Props.title}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {/* CATEGORY OPEN/CLOSE */}
          <button
            className={`flex justify-between font-semibold py-3 ${Props.backgroundColor} shadow-md px-3 items-center rounded-lg w-full`}
            onClick={() => Props.setCategoryOpen(!Props.categoryOpen)}
          >
            <span className='flex justify-start text-white items-center'>
              {Props.title}
              <span className='pl-1'>{Props.subtitle}</span>
            </span>
            <span className='flex justify-end items-center gap-2'>
              <span className='h-7 w-7 bg-white shadow-md rounded-full cursor-pointer'>
                {Props.categoryOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </span>
          </button>
          {Props.categoryOpen && (
            <motion.div
              className={`mt-4 grid space-y-4 ${Props.contentBorderColor} border-4 rounded-lg border-dashed p-2`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* CARD HEADING */}
              <div className='grid grid-cols-2 items-center'>
                <div
                  className={`font-semibold flex justify-start text-xs mx-auto ${Props.contentHeadingColor} p-3 rounded-lg border-b-2  ${Props.contentBorderColor}`}
                >
                  <div className='truncate overflow-hidden ...'>
                    {
                      Props.cards.filter(
                        (card: { category: string }) =>
                          card.category === Props.title
                      ).length
                    }{' '}
                    items
                  </div>
                </div>
                <button
                  type='submit'
                  className={`relative truncate inline-flex flex-initial items-center justify-center rounded-3xl ${Props.backgroundColor} px-4 py-2 font-bold leading-6 text-white shadow-md`}
                  onClick={() => handleOpenModal()}
                >
                  Add
                </button>
              </div>
              {Props.cards
                .filter(
                  (card: { category: string }) => card.category === Props.title
                )
                .map((category: any) => (
                  <div
                    key={category.id}
                    className={`${Props.cardColor} p-2 rounded-md bg-white`}
                  >
                    <div className='grid space-y-1 capitalize'>
                      <div className='flex items-center gap-2 truncate '>
                        <div className='bg-white p-1 rounded-lg '>
                          <BriefcaseIcon
                            className={`h-4 ${Props.contentHeadingColor}`}
                          />
                        </div>
                        <h1 className='flex font-semibold '>{category.job}</h1>
                      </div>
                      <div className='flex truncate'>
                        <div className='flex items-center gap-2'>
                          <div className='bg-white p-1 rounded-lg '>
                            <OfficeBuildingIcon
                              className={`h-4 ${Props.contentHeadingColor}`}
                            />
                          </div>
                          <h2 className='flex text-ellipsis text-sm'>
                            {category.company}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default Category;
