import React from 'react'
import SignInForm from '../components/auth/sign-in/signin-form.component'
import ResetPass from '../components/auth/sign-in/reset-pass/reset-pass.component'
import { useAppSelector, useAppDispatch } from '../hooks/useRedux'
import { setReset } from '../redux/features/authSlice'

interface RootState {
  auth: any
}

function SignIn() {
  const reset = useAppSelector((state: RootState) => state.auth.reset)
  globalThis.onload = function () {
    useAppDispatch(setReset(false))
  }
  return (
    <div className="flex min-h-screen">
      <div className="relative z-10 flex flex-1 flex-col justify-center py-12 px-6">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {reset ? <ResetPass /> : <SignInForm />}
        </div>
      </div>
    </div>
  )
}

export default SignIn
