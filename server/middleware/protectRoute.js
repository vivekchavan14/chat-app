import jwt from 'jsonwebtoken'
import User from '../models/user.model';

export const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookie.jwt;
        if(!token)
        {
            res.status(404).json({error:'Unauthorized, no token found'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if(!decoded){
            res.status(404).json({error:'Unauthorized,Invalid token'})
        }

        const user = await User.findById(decoded.userId).select("-password")
    } catch (error) {
        console.log("Error in protected Route controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}