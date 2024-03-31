import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.jsx";
import toast from "react-hot-toast";

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { loading };
};

export default useGetMessage;
