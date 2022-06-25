import React from 'react';
import Heading from '../../heading.component';

const Resume = () => {
  return (
    <div className=' h-[calc(100vh_-_4rem)]'>
      <Heading
        icon='📝'
        title='Resume'
        description='Build a resume and cover letter with the help of AI.'
        premium={true}
      />
      <div></div>
    </div>
  );
};

export default Resume;
