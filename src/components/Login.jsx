import React from 'react'
import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPasssword] = useState('');

    const emailHandler = e => {
        setEmail(e.target.value)
    }

    const passwordHandler = e => {
        setPasssword(e.target.value)
    }

    const submitHandler = e => {
        console.log('submit button')
    }
    return (
        <div>
            <div className='shadow p-5 lg:w-max lg:absolute lg:right-24 lg:top-40 bg-green-200 dark:bg-gray-400 lg:rounded-2xl lg:p-20 overflow-scroll'>
                <h2 className='text-3xl font-extrabold uppercase text-green-700 pb-7 lg:pb-10 lg:pt-3'>Login</h2>
                <form action="">
                    <div class="form-floating mb-5 xl:w-96 text-left">
                        <label for="email" className="text-gray-700 font-semibold pl-1">Email address</label>
                        <input type="email" autoComplete='off' className="mt-3 form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="name@example.com" value={email} onChange={emailHandler} required autoFocus />

                    </div>
                    <div class="form-floating mb-3 xl:w-96 text-left">
                        <label for="password" className="text-gray-700 font-semibold pl-1">Password</label>
                        <input type="password" className="mt-3 form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" placeholder="Password" value={password} onChange={passwordHandler} required />

                    </div>
                </form>
                <div className='pt-4'>
                    {
                        email | password === '' ?
                            <button className='bg-black text-gray-200 py-1 px-5 rounded-xl transition-all duration-200' disabled>Submit</button> :
                            <button className='bg-green-500 dark:bg-green-600 dark:text-gray-200 py-1 px-5 rounded-xl transition-all duration-200' onClick={submitHandler}>Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login