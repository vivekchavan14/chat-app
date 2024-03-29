import React from 'react';
import { TiPower } from 'react-icons/ti'; // Assuming TiPower is the correct icon for logout
import useLogout from '../hooks/useLogout';

function LogoutButton() {
  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto'>
      {
        !loading ? (
          <TiPower className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
        ) : (
          <span className='loading loading-spinner'></span>
        )
      }
    </div>
  );
}

export default LogoutButton;
