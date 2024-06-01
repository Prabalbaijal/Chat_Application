import {configureStore} from "@reduxjs/toolkit"
import userslice from "./userslice.js"
import messageslice from "./messageslice.js"
import socketSlice from "./socketslice.js"



const store=configureStore({
    reducer:{
        user:userslice,
        message:messageslice,
        socket:socketSlice
    }
})

export default store