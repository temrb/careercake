import React, { useState } from 'react'
import { useAppDispatch } from '../../../../hooks/useRedux'
import { setReset } from '../../../../redux/features/authSlice'
import { motion } from 'framer-motion'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  TextField,
  Alert,
  Snackbar,
  CircularProgress,
  AlertColor,
} from '@mui/material'
import Link from 'next/link'

interface IFormInput {
  email: string
  password: string
  code: string
}

const ResetPass = () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState('')
  const [showCode, setShowCode] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>('error')
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmitResetPass: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true)

    try {
      setShowCode(true)
      if (showCode) {
        await resetPassSubmit(data).then(() => {
          setLoading(false)
          setShowCode(false)
          setSeverity('success')
          setAlertOpen(true)
          setAlert('Password reset successfully')
          useAppDispatch(setReset(false))
        })
      } else {
        await resetPass(data)
          .then(() => {
            setLoading(false)
          })
          .catch((err) => {
            setAlert(err.message)
            setAlertOpen(true)
            setShowCode(false)
            setLoading(false)
          })
      }
    } catch (err) {
      console.error(err)
      setAlert(err.message)
      setAlertOpen(true)
      setLoading(false)
      setError(true)
      // setShowCode(false)
    }
  }

  async function resetPass(data: IFormInput) {
    const { email } = data
    try {
      await Auth.forgotPassword(email)
    } catch (err) {
      throw err
    }
  }

  async function resetPassSubmit(data: IFormInput) {
    const { email, password, code } = data
    await Auth.forgotPasswordSubmit(email, code, password)
    setAlertOpen(false)
  }

  const handleBackButton = () => {
    if (!showCode) {
      useAppDispatch(setReset(false))
    } else {
      setShowCode(false)
    }
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setAlertOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex justify-between'>
        <div className='flex items-center justify-start text-2xl font-semibold leading-9 tracking-tight'>
          Reset Password
        </div>
        <div className='flex cursor-pointer items-center justify-end font-Pacifico text-3xl text-accent1'>
          <Link href='/hello'>🍰</Link>
        </div>
      </div>
      <form className='mt-6'>
        {loading ? (
          <div className='flex justify-center pt-2'>
            <CircularProgress />
          </div>
        ) : (
          <>
            {showCode ? (
              <div className='space-y-6'>
                <TextField
                  className='h-full w-full !text-xl'
                  variant='filled'
                  id='code'
                  label='Verification Code*'
                  type='text'
                  error={error || errors.code ? true : false}
                  helperText={errors.code ? errors.code.message : null}
                  {...register('code', {
                    required: {
                      value: true,
                      message: 'Please enter your verification code.',
                    },
                  })}
                />
                <TextField
                  error={error || !!errors?.password}
                  id='userPassword'
                  className='h-full w-full '
                  type='password'
                  label='New Password'
                  {...register('password', {
                    required: true,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/,
                  })}
                  placeholder='New Password'
                  required={true}
                  helperText={
                    !!errors?.password
                      ? 'Required min 9 Chars. 1 Upper Case. 1 Special. '
                      : ''
                  }
                />
              </div>
            ) : (
              <>
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
                  helperText={
                    !!errors?.email ? 'Required format email@email.co(m)' : ''
                  }
                />
              </>
            )}
          </>
        )}
        <div className='mt-6 flex items-center justify-end text-gray-700'>
          <button
            className='w-full rounded-full bg-gray-500 py-2.5 px-5
                        font-semibold text-white transition-colors duration-300 hover:bg-gray-700'
            type='submit'
            onClick={handleSubmit(onSubmitResetPass)}
          >
            {showCode ? 'Change Password' : 'Send Verification Code'}
          </button>
        </div>
      </form>
      <Snackbar open={alertOpen} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity={severity}>
          {alert}
        </Alert>
      </Snackbar>
      <div className='mx-auto mt-6 flex justify-center'>
        <button
          className='text-l mx-auto cursor-pointer text-center font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-gray-700'
          onClick={() => {
            handleBackButton();
          }}
        >
          {showCode ? 'Change Email' : 'Go Back'}
        </button>
      </div>
    </motion.div>
  );
}

export default ResetPass
