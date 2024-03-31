import React, { useRef, useEffect } from 'react'; // Import useRef and useEffect
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessage.jsx';
import MessageSkeleton from '../skeleton/MessageSkeleton';

function Messages() {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    // Scroll to the last message when messages change
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            {/* Set ref to lastMessageRef for the last message */}
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
