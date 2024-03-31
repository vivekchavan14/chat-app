import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/message/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        // Ensure that messages is an array before updating state
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          throw new Error("Messages data is not in the expected format");
        }
      } catch (error) {
        toast.error(error.message); // Display error toast
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
