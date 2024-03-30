import React from 'react';
import useConversation from '../../zustand/useConversation';

function Conversation({ conversation, lastIdx, emoji }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const handleClick = () => {
    // Only trigger setSelectedConversation if the conversation is not already selected
    if (!isSelected) {
      setSelectedConversation(conversation);
    }
  };

  return (
    <div>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onClick={handleClick} // Handle click event
      >
        <div className=''>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt={`Profile picture of ${conversation.username}`} /> {/* Add appropriate alt attribute */}
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{conversation.username}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </div>
  );
}

export default Conversation;
