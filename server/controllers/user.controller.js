import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        // Assuming user ID is stored in req.user._id
        const loggedInUserId = req.user._id;
        
        // Find all users except the logged-in user, excluding the 'password' field
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
        
        // Send the filtered users in response
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in user controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
