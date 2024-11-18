import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      router.push('/');
      toast.success("Registration successful",{position:'bottom-right'});
    } else {
      toast.error("Failed to register",{position:'bottom-right'});
    }
  };

  return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'> Create an account </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or{' '}
              <a href='/signin' className='font-medium text-indigo-600 hover:text-indigo-500'>
                 sign in to your account
              </a>
            </p>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='name' className='sr-only'>
                  Name
                </label>
                <input id='name' name='name' type='text' className='appearance-none rounded-none relative block w-full px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email address
                </label>
                <input id='email' name='email' type='email' autoComplete='email' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input id='password' name='password' type='password' autoComplete='current-password' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div>
              <button type='submit' className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
