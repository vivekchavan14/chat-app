import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connect from './db/connect.js'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/message', messageRoutes)

app.listen(port, () => {
    connect()
    console.log(`Server is running on http://localhost:${port}`)
})