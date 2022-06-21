import React from 'react'
import SignUpForm from '../components/auth/sign-up/signup-form.component'
import TrustedBy from '../components/auth/sign-up/trust-by.component'

function SignUp() {
  return (
    <div className="flex min-h-screen">
      {/* left */}
      <SignUpForm />

      {/* right */}
      <TrustedBy />
    </div>
  )
}

export default SignUp
