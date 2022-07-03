import React, { useState } from 'react';
import CoverLetterView from './cover-letter-view/cover-letter-view.component';
import ResumeView from './resume-view/resume-vew.component';

interface RootState {
  resume: any;
}

const ResumeAndCoverLetter = () => {
  const [resume, setResume] = useState(true);

  const handleResume = () => {
    setResume(true);
  };

  const handleCoverLetter = () => {
    setResume(false);
  };

  return (
    <main>
      <div className='px-6 pb-6 pt-6 flex justify-center gap-4'>
        <button
          className={`font-semibold px-3 py-2 rounded-xl
          ${resume ? 'text-gray-400' : 'text-white bg-accent1'}
        `}
          onClick={handleCoverLetter}
        >
          Cover Letter
        </button>
        <button
          className={`font-semibold px-3 py-2 rounded-xl
        ${resume ? 'text-white bg-accent1' : 'text-gray-400'}
        `}
          onClick={handleResume}
        >
          Resume
        </button>
      </div>
      <div className='pt-6 px-6 grid lg:grid-cols-2 grid-cols-1 gap-4 overflow-auto'>
        {resume ? <ResumeView /> : <CoverLetterView />}
      </div>
    </main>
  );
};

export default ResumeAndCoverLetter;
