import React from 'react';
import Heading from '../../heading.component';
import JobSearch from './job-search/job-search.component';

const Search = () => {
  return (
    <div className=' h-[calc(100vh_-_4rem)]'>
      <Heading
        icon='🔎'
        title='Search'
        description='Search and apply for jobs.'
      />
      <JobSearch />
    </div>
  );
};

export default Search;
