import React from 'react';
import SettingsGrid from './settings-grid.component';
import { Auth } from 'aws-amplify';

const Settings = () => {
  return (
    <div className='pt-6 px-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 overflow-auto'>
      <SettingsGrid
        borderColor='border-red-500'
        textColor='text-red-500'
        onClick={() => {
          Auth.signOut();
        }}
      >
        Log Out
      </SettingsGrid>
    </div>
  );
};

export default Settings;
