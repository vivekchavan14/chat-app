import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; // Corrected typo

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized, no token found' }); // Changed status code to 401 for unauthorized access
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded) {
            return res.status(401).json({ error: 'Unauthorized, invalid token' }); // Changed status code to 401 for unauthorized access
        }

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protected Route controller", error.message); // Changed console.log to console.error for error logging
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default protectRoute;
