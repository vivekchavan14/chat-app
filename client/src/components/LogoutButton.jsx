import React from 'react';
import { TbLogout2 } from "react-icons/tb";

function LogoutButton() {
  return (
    <div className='mt-auto'>
      <TbLogout2 className='w-6 h-6 text-white cursor-pointer' />
    </div>
  );
}

export default LogoutButton;
