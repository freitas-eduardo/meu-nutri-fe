"use client";
import { useSearchParams } from 'next/navigation';
import React from 'react';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const searchParams =useSearchParams()
  const loginType = searchParams.get("type")
  console.log(loginType, 'type')
  return(
    <div>
      SignIn
      {loginType}
    </div>
  ) ;
}

export default SignIn;