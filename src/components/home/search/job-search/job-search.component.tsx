import React from 'react';
import SearchInput from './search-input.component';
import SearchOutput from './search-output.component';

const JobSearch = () => {
  return (
    <div className='grid justify-center space-y-4 pt-6 px-6'>
      <SearchInput />
      <SearchOutput />
    </div>
  );
};

export default JobSearch;
