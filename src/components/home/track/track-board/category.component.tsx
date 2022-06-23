import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import { setCategoryInput } from '../../../../redux/features/trackSlice';

interface RootState {
  utils: any;
}

interface Props {
  title: string;
  backgroundColor: string;
  contentBorderColor: string;
  contentHeadingColor: string;
  setCategoryOpen: any;
  categoryOpen: boolean;
  contentCount: any;
  children: React.ReactNode;
}

const Category = (Props: Props) => {
  const modal = useAppSelector((state: RootState) => state.utils.modal);

  const handleOpenModal = () => {
    useAppDispatch(setModal(true));
    useAppDispatch(setCategoryInput(Props.title));
  };

  return (
    <div>
      <button
        className={`flex justify-between font-semibold py-3 ${Props.backgroundColor} shadow-md px-3 items-center rounded-lg w-full`}
        onClick={() => Props.setCategoryOpen(!Props.categoryOpen)}
      >
        <span className='flex justify-start items-center'>{Props.title}</span>
        <span className='flex justify-end items-center gap-2'>
          <span className='h-7 w-7 bg-white shadow-md rounded-full cursor-pointer'>
            {Props.categoryOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </span>
      </button>
      {Props.categoryOpen && (
        <div
          className={`mt-4 grid space-y-4 ${Props.contentBorderColor} border-4 rounded-lg border-dashed p-2`}
        >
          <div className='grid grid-cols-2 items-center'>
            <div
              className={`font-semibold flex justify-start text-xs mx-auto ${Props.contentHeadingColor} p-3 rounded-lg border-b-2 ${Props.contentBorderColor}`}
            >
              {Props.contentCount.length} items
            </div>
            {!modal && (
              <button
                type='submit'
                className={`relative inline-flex flex-initial items-center justify-center rounded-3xl ${Props.backgroundColor} px-4 py-2 font-bold leading-6 text-white shadow-md`}
                onClick={() => handleOpenModal()}
              >
                Add
              </button>
            )}
          </div>
          {Props.children}
        </div>
      )}
    </div>
  );
};

export default Category;
