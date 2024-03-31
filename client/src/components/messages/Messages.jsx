import React, { useEffect, useRef } from 'react';
import Message from '../messages/Message.jsx';
import useGetMessage from '../../hooks/useGetMessage.jsx';
import MessageSkeleton from '../skeleton/MessageSkeleton';

function Messages() {
    const { messages, loading } = useGetMessage();
    const lastMessageRef = useRef();

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading ? (
                messages && messages.length > 0 ? ( // Add a guard clause here
                    messages.map((message, index) => (
                        <div key={message._id} ref={lastMessageRef}>
                            <Message message={message} />
                        </div>
                    ))
                ) : (
                    <p className='text-center'>Send a message to start the conversation</p>
                )
            ) : (
                [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
            )}
        </div>
    );
}

export default Messages;
