import React, { useState } from 'react';
import {
  TextField,
  Alert,
  Snackbar,
  CircularProgress,
  AlertColor,
} from '@mui/material';
import GoogleLogo from '../../../../public/assets/logos/google.logo';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { Auth } from 'aws-amplify';
import { setReset } from '../../../redux/features/authSlice';
import { useRouter } from 'next/router';
import { setSignUp } from '../../../redux/features/authSlice';
import { useAppDispatch } from '../../../hooks/useRedux';

interface IFormInput {
  email: string;
  password: string;
  code: string;
}

const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [unconfirmedUser, setUnconfirmedUser] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [error, setError] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>('error');
  const [showCode, setShowCode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitCredentials: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    setShowCode(false);
    try {
      const amplifyUser = await Auth.signIn(data.email, data.password);
      if (amplifyUser) {
        setLoading(false);
        router.replace('/');
      }
      setShowCode(false);
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        setUnconfirmedUser(true);
        setLoading(false);

        //WIP RESEND CONFIRMATION EMAIL TO USER
        // setShowCode(true)
        await Auth.resendSignUp(data.email)
          .then(() => {
            setAlert('A confirmation code has been sent to your email.');
            setAlertOpen(true);
            setShowCode(true);
            setSeverity('success');
            setError(true);
          })
          .catch((err) => {
            setAlert(err.message);
            setAlertOpen(true);
            setSeverity('error');
            // setShowCode(true)
          });
      } else {
        setAlert(error.message);
        setAlertOpen(true);
        setSeverity('error');
        setError(true);
        setLoading(false);
      }
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleCancel = () => {
    setUnconfirmedUser(false);
    setError(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <div className='flex justify-between'>
          <div className='flex items-center justify-start text-2xl font-semibold leading-9 tracking-tight'>
            Sign in to your account
          </div>
          <div className='flex cursor-pointer items-center justify-end font-Fascinate text-3xl text-accent1'>
            <Link href='/hello'>🍰</Link>
          </div>
        </div>
        {unconfirmedUser && (
          <div className='mt-1 font-extralight'>
            Confirm your email to continue.
          </div>
        )}
      </>
      <div className='mt-6'>
        <form className='space-y-6'>
          <TextField
            error={error || !!errors?.email}
            id='userEmail'
            required={true}
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            className='h-full w-full rounded-lg border-solid'
            type='email'
            label='Email'
            helperText={
              !!errors?.email ? 'Required format email@email.co(m)' : ''
            }
          />
          {unconfirmedUser ? (
            showCode && (
              <TextField
                className='h-full w-full !text-xl'
                variant='filled'
                id='code'
                label='Verification Code*'
                type='text'
                error={errors.code ? true : false}
                helperText={errors.code ? errors.code.message : null}
                {...register('code', {
                  required: {
                    value: true,
                    message: 'Please enter your verification code.',
                  },
                })}
              />
            )
          ) : (
            <TextField
              error={error || !!errors?.password}
              id='userPassword'
              required={true}
              {...register('password', {
                required: true,
              })}
              className='h-full w-full rounded-lg border-solid'
              type='password'
              label='Password'
              helperText={!!errors?.password ? 'Required' : ''}
            />
          )}

          {loading ? (
            <div className='flex justify-center pt-2'>
              <CircularProgress />
            </div>
          ) : unconfirmedUser ? (
            <div className='flex justify-between gap-2'>
              <button
                className='mt-6 flex w-full items-center justify-center rounded-full bg-gray-500 py-2.5 px-5
                          font-semibold text-white transition-colors duration-300 hover:bg-gray-700'
                type='submit'
                onClick={handleSubmit(onSubmitCredentials)}
              >
                {showCode ? 'Confirm Code' : 'Send Code'}
              </button>
              <button
                className='mt-6 flex w-full items-center justify-center rounded-full bg-red-500 py-2.5 px-5
                        font-semibold text-white transition-colors duration-300 hover:bg-red-700'
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className='mt-6 flex w-full items-center justify-center rounded-full bg-gray-500 py-2.5 px-5
                        font-semibold text-white transition-colors duration-300 hover:bg-gray-700'
              type='submit'
              onClick={handleSubmit(onSubmitCredentials)}
            >
              Sign In
            </button>
          )}
        </form>
        <button
          className=' relative mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-400 py-2.5 
                                                    px-5 font-semibold text-white shadow-sm transition duration-300 ease-in-out 
                                                    hover:bg-blue-600 '
          onClick={() =>
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
            })
          }
        >
          <span className='flex items-center space-x-4'>
            <GoogleLogo width={20} height={20} />
            <div className='whitespace-nowrap'>Continue with Google</div>
          </span>
        </button>
        <div className='mt-6 grid grid-cols-2'>
          <button
            className='text-l mx-auto cursor-pointer justify-center font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-gray-700 '
            onClick={() => useAppDispatch(setSignUp(true))}
          >
            Sign up instead
          </button>
          <button
            className='text-l mx-auto cursor-pointer justify-center font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-gray-700'
            onClick={() => {
              useAppDispatch(setReset(true));
            }}
          >
            Reset Password
          </button>
        </div>
      </div>
      <Snackbar open={alertOpen} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity={severity}>
          {alert}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default SignInForm;
