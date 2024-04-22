import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'

dotenv.config({})

const app=express()

const PORT=process.env.PORT || 7000

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server Detected ${PORT}`)
})