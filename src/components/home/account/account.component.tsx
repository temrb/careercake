import React from 'react';
import Heading from '../../heading.component';
import Settings from './settings.component';

const Account = () => {
  return (
    <div className=' h-[calc(100vh_-_4rem)]'>
      <Heading
        icon='⚙️'
        title='Account'
        description='Manage your account settings.'
      />
      <Settings />
    </div>
  );
};

export default Account;
