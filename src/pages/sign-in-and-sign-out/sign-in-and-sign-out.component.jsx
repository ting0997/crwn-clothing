import React from 'react';
import SignIn from '../../component/sign-in/sign-in.component'


import './sign-in-and-sign-out.styles.scss'


const SignInAndSignOut=()=>(
    <div className='sign-in-and-sign-out'>
    <h2>I already have an account</h2>
    <span>Sign in with your email and password.</span>
    <div className='sign-in'> <SignIn /></div>
    </div>
)

export default SignInAndSignOut