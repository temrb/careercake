import React from 'react';
import SettingsGrid from './settings-grid.component';
import { Auth } from 'aws-amplify';

const Settings = () => {
  return (
    <div className='px-6 pt-6 space-y-6'>
      <div className=' grid grid-cols-1 gap-4'>
        <SettingsGrid onClick={() => {}}>Manage Subscription</SettingsGrid>
        <SettingsGrid onClick={() => {}}>Reset Password</SettingsGrid>
        <SettingsGrid onClick={() => {}}>Reset Password</SettingsGrid>
        <SettingsGrid
          onClick={() => {
            Auth.signOut();
          }}
        >
          Log Out
        </SettingsGrid>
      </div>
    </div>
  );
};

export default Settings;
