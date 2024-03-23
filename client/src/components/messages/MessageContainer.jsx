import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

function MessageContainer() {
  // Assume you have a state variable to track whether a chat is selected
  const isChatSelected = true; // Replace this with your actual state logic

  if (!isChatSelected) {
    return (
      <div className='h-screen w-full flex items-center justify-center'>
        <p className='text-gray-500'>No chat selected</p>
      </div>
    );
  }

  return (
    <div className='h-screen w-full md:min-w-[450px] flex flex-col'>
      <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='text-white'>To:</span>{' '}
        <span className='text-gray-900 font-bold'>Vivek Chavan</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
}

export default MessageContainer;
