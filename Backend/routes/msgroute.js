import express from"express"
import { getMsg, sendMsg } from "../controllers/msgcontrollers.js"
import isAuthenticated from "../middlewares/Authetication.js"
const router=express.Router()
router.route("/send/:id").post(isAuthenticated,sendMsg)
router.route("/:id").get(isAuthenticated,getMsg)
export default router