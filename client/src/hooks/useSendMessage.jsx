import { useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-toastify";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        // Check if the response is not ok
        throw new Error('Failed to send message. Please try again.'); // Throw an error with a generic message
      }

      const data = await res.json();
      setMessages([...messages, data]);
      toast.success("Message sent successfully!"); // Display success toast
    } catch (error) {
      console.error(error);
      toast.error(error.message); // Display error toast
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
