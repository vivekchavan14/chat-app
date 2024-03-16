import React from 'react'
import GenderCheckBox from './GenderCheckBox'

function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen mx-auto'>
      <div className="h-full w-80 p-5 items-center bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
      <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-blue-500'>ChatAPP</span></h1>

      <form>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
        </div>
        <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
          </div>

          <GenderCheckBox />
          <a  href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
             Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>
          </div>
      </form>
      </div>
    </div>
  )
}

export default Signup
