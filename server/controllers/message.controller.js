export const sendMessage = async(req,res)=>{
     try {
        const {message} = req.body
        const id = request.params.id
     } catch (error) {
        console.log("Error in message controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
     }
}
