import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'

dotenv.config({})

const app=express()

const PORT=process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/user",userRoutes)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server Detected ${PORT}`)
})