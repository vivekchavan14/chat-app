import { create } from "zustand";

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (data) => {
        set((state) => {
            console.log("Setting messages with:", data);
            console.log("Previous messages:", state.messages);
            return {
                messages: [...state.messages, data],
            };
        });
    },
}));

export default useConversation;
