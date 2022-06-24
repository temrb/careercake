import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick: any;
  borderColor: string;
  textColor: string;
}

const SettingsGrid = (Props: Props) => {
  return (
    <button
      className={`${Props.borderColor} ${Props.textColor} border-2 rounded-md flex justify-center py-2 px-3 font-bold text-xl`}
      onClick={() => {
        Props.onClick;
      }}
    >
      {Props.children}
    </button>
  );
};

export default SettingsGrid;
