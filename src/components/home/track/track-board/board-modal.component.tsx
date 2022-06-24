import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { setModal } from '../../../../redux/features/utilsSlice';
import { setCategoryInput } from '../../../../redux/features/trackSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  CircularProgress,
} from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { API } from 'aws-amplify';
import { createCard } from '../../../../graphql/mutations';
import { CreateCardInput, CreateCardMutation } from '../../../../API';
// import { useRouter } from 'next/router';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

interface RootState {
  track: any;
}

interface IFormInput {
  job: string;
  company: string;
  link?: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 3,
};

const BoardModal = () => {
  const categoryInput = useAppSelector(
    (state: RootState) => state.track.categoryInput
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dateInput, setDateInput] = useState<Date | null>(new Date(Date.now()));

  const handleChange = (event: SelectChangeEvent) => {
    useAppDispatch(setCategoryInput(event.target.value as string));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleCloseModal = () => useAppDispatch(setModal(false));

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      const createNewCardInput: CreateCardInput = {
        job: data.job,
        company: data.company,
        link: data?.link,
        category: categoryInput,
        date: dateInput!.toISOString(),
      };
      const createNewCard = (await API.graphql({
        query: createCard,
        variables: {
          input: createNewCardInput,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as { data: CreateCardMutation };
      setLoading(false);
      handleCloseModal();
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };
  return (
    <Box sx={style}>
      {loading ? (
        <div className='place-content-center flex'>
          <CircularProgress />
        </div>
      ) : (
        <>
          <h1 className='text-2xl py-1 text-center font-light mx-auto'>
            Add to <span className='font-bold'>{categoryInput}</span>
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            className='h-full w-full pt-4'
          >
            <div className='space-y-4'>
              {/* JOB */}
              <TextField
                error={error || !!errors?.job}
                className='h-full w-full '
                type='text'
                label='Job Name'
                {...register('job', {
                  required: true,
                })}
                required={true}
                placeholder='Software Engineer'
                helperText={!!errors?.job ? 'Required' : ''}
              />
              {/* COMPANY NAME */}
              <TextField
                error={error || !!errors?.company}
                className='h-full w-full'
                type='text'
                label='Company'
                {...register('company', {
                  required: true,
                })}
                required={true}
                placeholder='Google'
                helperText={!!errors?.company ? 'Required' : ''}
              />
              {/* LINK */}
              <TextField
                className='h-full w-full'
                type='text'
                label='Link'
                {...register('link', {
                  required: false,
                })}
                placeholder='https://careers.google.com/'
              />
              {/* CATEGORY */}
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryInput}
                  label='Category'
                  onChange={handleChange}
                >
                  <MenuItem value={'Wishlist'}>Wishlist</MenuItem>
                  <MenuItem value={'Applied'}>Applied</MenuItem>
                  <MenuItem value={'Interview'}>Interview</MenuItem>
                  <MenuItem value={'Offer'}>Offer</MenuItem>
                  <MenuItem value={'Rejected'}>Rejected</MenuItem>
                </Select>
              </FormControl>
              {/* DATE / TIME */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDateTimePicker
                  value={dateInput}
                  onChange={(newValue) => {
                    setDateInput(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className='!w-full !bg-gray-200'
                      placeholder='Select a date and time'
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            {/* MODAL SUBMIT BUTTONS */}
            <div className='grid content-end'>
              <div className={'flex justify-between gap-2 '}>
                <button
                  type='submit'
                  className='mt-6 flex w-full items-center justify-center rounded-full bg-gray-500 py-2.5 px-5
                            font-semibold text-white transition-colors duration-300 hover:bg-gray-700'
                >
                  Add Item
                </button>
                <button
                  className='mt-6 flex w-full items-center justify-center rounded-full bg-red-500 py-2.5 px-5
                          font-semibold text-white transition-colors duration-300 hover:bg-red-700'
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </Box>
  );
};

export default BoardModal;
