import React from 'react';
import Heading from '../../heading.component';

const Account = () => {
  return (
    <div className=' h-[calc(100vh_-_4rem)]'>
      <Heading
        icon='⚙️'
        title='Settings'
        description='Manage your account settings.'
      />
      <div></div>
    </div>
  );
};

export default Account;
