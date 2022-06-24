import React, { useState } from 'react';
import Link from 'next/link';
import {
  TextField,
  Alert,
  Snackbar,
  CircularProgress,
  AlertColor,
} from '@mui/material';
import GoogleLogo from '../../../../public/assets/logos/google.logo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  code: string;
}

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [error, setError] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>('error');

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitCredentials: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      if (showCode) {
        confirmSignUp(data);
      } else {
        await signUpWithEmailAndPassword(data);
        setShowCode(true);
      }
    } catch (err) {
      console.error(err);
      setAlert(err.message);
      setAlertOpen(true);
      setError(true);
      setSeverity('error');
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  async function signUpWithEmailAndPassword(
    data: IFormInput
  ): Promise<CognitoUser> {
    const { name, password, email } = data;
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
        },
      });
      console.log('Signed up a user:', user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async function confirmSignUp(data: IFormInput) {
    const { email, password, code } = data;
    try {
      await Auth.confirmSignUp(email, code);
      const amplifyUser = await Auth.signIn(email, password);
      console.log('Successs, singed in a user', amplifyUser);
      if (amplifyUser) {
        router.push('/');
        setLoading(false);
      } else {
        throw new Error("Something went wrong :'(");
      }
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  return (
    <div className='relative z-10 flex flex-1 flex-col justify-center px-6 py-12 lg:flex-none lg:px-16 lg:shadow-2xl lg:shadow-white xl:px-24'>
      <div className='mx-auto w-full max-w-sm lg:w-96'>
        {!showCode ? (
          <>
            <div className='flex justify-between'>
              <div className='flex items-center justify-start text-3xl font-semibold leading-9 tracking-tight '>
                Create an account
              </div>
              <div className='flex cursor-pointer items-center justify-end font-Fascinate text-3xl text-accent1'>
                <Link href='/hello'>🍰</Link>
              </div>
            </div>
            <div className='mt-1 font-extralight'>
              This will take only a sec or two.
            </div>
          </>
        ) : (
          <></>
        )}

        <div className='mt-6'>
          <form className='space-y-6'>
            {showCode ? (
              <TextField
                className='h-full w-full !text-xl'
                variant='filled'
                id='code'
                label='Verification Code'
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
            ) : (
              <>
                <TextField
                  error={error || !!errors?.name}
                  className='h-full w-full '
                  type='text'
                  label='Name'
                  {...register('name', { required: true })}
                  required={true}
                  placeholder='Name'
                  helperText={!!errors?.name ? 'Required' : ''}
                />

                <TextField
                  error={error || !!errors?.email}
                  id='userEmail'
                  className='h-full w-full '
                  type='email'
                  label='Email'
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  required={true}
                  placeholder='Email'
                  helperText={
                    !!errors?.email ? 'Required format email@email.co(m)' : ''
                  }
                />
                <TextField
                  error={error || !!errors?.password}
                  id='userPassword'
                  className='h-full w-full '
                  type='password'
                  label='Password'
                  {...register('password', {
                    required: true,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/,
                  })}
                  placeholder='Password'
                  required={true}
                  helperText={
                    !!errors?.password
                      ? 'Required min 9 Chars. 1 Upper Case. 1 Special. '
                      : ''
                  }
                />
              </>
            )}

            <div className='mt-6 flex items-center justify-end text-gray-700'>
              <button
                className='w-full rounded-full bg-gray-500 py-2.5 px-5
                      font-semibold text-white transition-colors duration-300 hover:bg-gray-700'
                type='submit'
                onClick={handleSubmit(onSubmitCredentials)}
              >
                {showCode ? 'Confirm Code' : 'Sign Up'}
              </button>
            </div>
          </form>
          <Snackbar open={alertOpen} autoHideDuration={6000}>
            <Alert onClose={handleClose} severity={severity}>
              {alert}
            </Alert>
          </Snackbar>
          {showCode ? (
            <>
              <button
                className='text-l mx-auto mt-6 flex cursor-pointer justify-center font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-gray-700'
                onClick={() => {
                  setShowCode(false);
                }}
              >
                Go Back
              </button>
            </>
          ) : (
            <>
              <div className='mt-6 flex w-full items-center'>
                <div className='w-full'>
                  <button
                    className='relative inline-flex w-full items-center justify-center rounded-full bg-blue-400 py-2.5
                                                        px-5 font-semibold text-white shadow-sm transition duration-300 ease-in-out
                                                        hover:bg-blue-600 '
                    onClick={() =>
                      Auth.federatedSignIn({
                        provider: CognitoHostedUIIdentityProvider.Google,
                      })
                    }
                  >
                    <span className='flex items-center space-x-4'>
                      <GoogleLogo height={20} width={20} />
                      <div className='whitespace-nowrap'>
                        Continue with Google
                      </div>
                    </span>
                  </button>
                </div>
              </div>
              <div className='text-l mx-auto mt-6 cursor-pointer text-center font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-gray-700'>
                <Link href='/signin'>Sign In Instead</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
