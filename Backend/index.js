import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import userRoutes from './routes/userRoutes.js'
import msgroute from './routes/msgroute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {server,app} from "./socket/socket.js"

dotenv.config({})

// const app=express()

const PORT=process.env.PORT || 6000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true,
}

app.use(cors(corsOptions))

app.use("/api/v1/user",userRoutes)
app.use("/api/v1/message",msgroute)

server.listen(PORT,()=>{
    connectDB()
    console.log(`Server Detected ${PORT}`)
})