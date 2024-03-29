import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen mx-auto'>
      <div className="h-full w-80 p-5 items-center bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-500'>ChatAPP</span></h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 bg-blue-700' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
