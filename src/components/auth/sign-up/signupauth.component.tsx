import React from "react";
import SignUpForm from './signup-form.component';
import TrustedBy from './trust-by.component';

const SignUpAuth = () => {
  return (
    <div className='flex min-h-screen'>
      {/* left */}
      <SignUpForm />

      {/* right */}
      <TrustedBy />
    </div>
  );
};

export default SignUpAuth;
