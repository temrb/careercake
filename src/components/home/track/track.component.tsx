import React from 'react';
import Heading from '../../heading.component';
import TrackBoard from './track-board/track-board.component';

const Track = () => {
  return (
    <div className=' lg:h-[calc(100vh_-_4rem)] h-[calc(100vh_-_8rem)] sticky'>
      <Heading
        icon='📋'
        title='Track'
        description='Track the status of your job applications.'
      />
      <TrackBoard />
    </div>
  );
};

export default Track;
