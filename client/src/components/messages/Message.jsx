import React from 'react';
import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../utils/extractTime.jsx";
import useConversation from "../../hooks/useGetConversations.jsx";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const formattedTime = extractTime(message.createdAt);

    // Check if authUser and selectedConversation are available
    if (!authUser || !selectedConversation) {
        // Return null or some fallback UI if necessary
        return null;
    }

    const fromMe = message.senderId === authUser._id;
    console.log('fromMe:', fromMe); // Debug logging
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    console.log('chatClassName:', chatClassName); // Debug logging
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Profile' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    );
};

export default Message;
