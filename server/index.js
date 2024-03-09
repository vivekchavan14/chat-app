import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const port = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/signup',(req,res)=>{
    res.send("This is signu route")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})