import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, CircularProgress } from '@mui/material';

interface IFormInput {
  search: string;
  location: string;
}

const SearchInput = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitJobSearch: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='input-group flex gap-2 items-stretch w-full mb-4'>
      <div className='flex gap-4'>
        <TextField
          className='h-full w-full'
          variant='standard'
          label='What'
          type='text'
          placeholder='Job title, company, or keyword'
          required={true}
          error={errors.search ? true : false}
          helperText={errors.search ? errors.search.message : null}
          {...register('search', {
            required: {
              value: true,
              message: 'Required.',
            },
          })}
        />
        <TextField
          className='h-full w-full'
          variant='standard'
          label='Where'
          type='text'
          placeholder='City, state, or zip code'
          required={true}
          error={errors.location ? true : false}
          helperText={errors.location ? errors.location.message : null}
          {...register('location', {
            required: {
              value: true,
              message: 'Required.',
            },
          })}
        />
      </div>
      {loading ? (
        <div className='flex justify-center pt-2'>
          <CircularProgress />
        </div>
      ) : (
        <button
          className='btn px-4 py-2.5 text-blue-500 font-medium text leading-tight uppercase hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out flex items-center'
          type='submit'
          onClick={handleSubmit(onSubmitJobSearch)}
        >
          <SearchIcon className='h-6' />
        </button>
      )}
    </form>
  );
};

export default SearchInput;
