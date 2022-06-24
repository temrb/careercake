import React from 'react';
import { useAppSelector } from '../hooks/useRedux';

interface Props {
  icon: string;
  title?: string;
  description?: string;
  premium?: boolean;
}

interface RootState {
  user: any;
}

const Heading = ({ icon, title, description, premium }: Props) => {
  // const isSubscribed = useAppSelector(
  //   (state: RootState) => state?.user?.isSubscribed
  // )

  const isSubscribed = false;

  return (
    <div className=' z-10 flex items-center px-6 pb-6 pt-6 sticky top-0 bg-white shadow-lg lg:shadow-none'>
      <div className='flex flex-grow justify-start space-x-5'>
        <div className='item-center flex'>
          {/* icon */}
          <div className='flex items-center pr-4'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gray-300/50 shadow-md'>
              <div className='text-4xl'>{icon}</div>
            </div>
          </div>
          {/* text */}
          <div className='flex items-center '>
            <div className='flex items-center'>
              <div className='grid'>
                <h1 className='flex items-center justify-start gap-4 text-xl font-bold text-gray-700 lg:text-2xl'>
                  <div className='inline-flex items-center space-x-2'>
                    {title}
                  </div>
                  {isSubscribed ? (
                    <></>
                  ) : (
                    <>
                      {premium ? (
                        <div className='rounded-xl bg-orange-500 px-3 py-1 text-xs font-bold text-white'>
                          premium
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </>
                  )}
                </h1>
                <p className='flex justify-start pt-1 text-sm text-gray-500'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
