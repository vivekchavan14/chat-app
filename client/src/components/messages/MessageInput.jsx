import React from 'react';
import { BsSendFill } from 'react-icons/bs';

function MessageInput() {
  return (
    <form className='px-4 my-3'>
      <div className='relative w-full'> {/* Add relative class to position the button */}
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
        />
        <button
          type='submit'
          className='absolute inset-y-0 right-0 flex items-center px-3 text-white' // Update pe-3 to px-3
        >
          <BsSendFill />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
