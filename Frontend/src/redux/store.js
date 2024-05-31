import {configureStore} from "@reduxjs/toolkit"
import userslice from "./userslice.js"
import messageslice from "./messageslice.js"

const store=configureStore({
    reducer:{
        user:userslice,
        message:messageslice
    }
})

export default store