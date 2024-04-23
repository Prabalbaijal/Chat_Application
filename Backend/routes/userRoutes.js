import express from 'express'
import { register } from '../controllers/usercontroaller.js'

const router=express.Router()

router.route("/register").post(register)

export default router