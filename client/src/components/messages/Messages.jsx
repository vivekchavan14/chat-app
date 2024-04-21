import { useEffect, useRef, useCallback } from "react";
import useGetMessages from "../../hooks/useGetMessage.jsx";
import MessageSkeleton from "../skeleton/MessageSkeleton.jsx";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
const Messages = () => {
	const { messages = [], loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	const scrollToLastMessage = useCallback(() => {
		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	// Debug logs to check the data and loading state
	console.log("Messages:", messages);
	console.log("Loading:", loading);

	useEffect(() => {
		if (!loading && messages?.length) {
			scrollToLastMessage();
		}
	}, [messages, loading, scrollToLastMessage]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages?.length ? (
				messages.map((message, index) => {
					console.log("Rendering message:", message._id);
					return (
						<div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
							<Message message={message} />
						</div>
					);
				})
			) : loading ? (
				[...Array(3)].map((_, idx) => {
					console.log("Rendering skeleton:", idx);
					return <MessageSkeleton key={idx} />;
				})
			) : (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;
