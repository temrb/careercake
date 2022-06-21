import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

interface Props {
  title: string;
  backgroundColor: string;
  borderColor: string;
  setCategoryOpen: any;
  categoryOpen: boolean;
  categoryContent: any;
  children: React.ReactNode;
}

const Category = (Props: Props) => {
  return (
    <div className=''>
      <button
        className={`flex justify-between font-semibold py-3 bg-${Props.backgroundColor}-300 shadow-md px-3 items-center rounded-lg w-full`}
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
          className={`mt-4 flex flex-col space-y-4 border-${Props.borderColor}-400/50 border-4 rounded-lg border-dashed p-2`}
        >
          <div
            className={`font-semibold text-xs bg-${Props.backgroundColor}-300 mx-auto p-2 rounded-lg `}
          >
            {Props.categoryContent.length} items
          </div>

          {Props.children}
        </div>
      )}
    </div>
  );
};

export default Category;
