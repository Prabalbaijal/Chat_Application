import express from 'express'
import { register,login,logout, otherUsers} from '../controllers/usercontroaller.js'
import isAuthenticated from '../middlewares/Authetication.js'

const router=express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/").get(isAuthenticated,otherUsers)

export default router