import React from 'react';
import Sidebar from '../../components/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

function Home() {
  return (
    <div className='h-full flex  justify-center items-center p-10'>
      <div className='flex w-full gap-20 max-w-screen-lg'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default Home;
