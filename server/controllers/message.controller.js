import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        const [savedMessage, savedConversation] = await Promise.all([
            newMessage.save(),
            conversation.save()
        ]);

        savedConversation.messages.push(savedMessage._id);
        await savedConversation.save();

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error in Setmessage controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages"); // Corrected field name from "message" to "messages" and used populate to populate the messages

        if (!conversation) {
            return res.status(404).json({ error: "Conversation not found" });
        }

        res.status(200).json({ messages: conversation.messages }); // Corrected the response to include messages
    } catch (error) {
        console.error("Error in getMessage controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
