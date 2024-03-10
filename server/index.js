import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connect from './db/connect.js'
const app = express()
dotenv.config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/api/auth',authRoutes)

app.listen(port, () => {
    connect()
    console.log(`Server is running on http://localhost:${port}`)
})