import React from 'react';
import Heading from '../../heading.component';
import ResumeAndCoverLetter from './resume-and-cover-letter/resume-and-cover-letter.component';

const Resume = () => {
  return (
    <div className=' h-[calc(100vh_-_4rem)]'>
      <Heading
        icon='📝'
        title='Resume'
        description='Build a resume and cover letter with the help of AI.'
        premium={true}
      />
      <ResumeAndCoverLetter />
    </div>
  );
};

export default Resume;
