import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick: any;
}

const SettingsGrid = (Props: Props) => {
  return (
    <button
      className='text-slate-600 flex mx-auto justify-center py-2 px-3 font-bold text-xl'
      onClick={() => {
        Props.onClick;
      }}
    >
      {Props.children}
    </button>
  );
};

export default SettingsGrid;
