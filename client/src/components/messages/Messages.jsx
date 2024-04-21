import { useEffect, useRef, useCallback } from "react";
import useGetMessages from "../../hooks/useGetMessage";
import MessageSkeleton from "../skeleton/MessageSkeleton.jsx";
import Message from "./Message";

const Messages = () => {
    const { messages = [], loading } = useGetMessages();
    const lastMessageRef = useRef();

    const scrollToLastMessage = useCallback(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (!loading && messages?.length) {
            scrollToLastMessage();
        }
    }, [messages, loading, scrollToLastMessage]);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages?.length ? (
                messages.map((message, index) => (
                    <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                        <Message message={message} />
                    </div>
                ))
            ) : loading ? (
                [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
            ) : (
                <p className='text-center mt-9'>Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;
