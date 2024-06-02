import {configureStore} from "@reduxjs/toolkit"
import userslice from "./userslice.js"
import messageslice from "./messageslice.js"
import socketSlice from "./socketslice.js"
// import { useReducer } from "react"

// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
//   import storage from 'redux-persist/lib/storage'

//   const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }
//   const rootReducer=combineReducers({
//     user:userslice,
//     message:messageslice,
//     socket:socketSlice
// })

//   const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store=configureStore({
//     reducer:persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }),
// })

const store=configureStore({
  reducer:{
    user:userslice,
    message:messageslice,
    socket:socketSlice
  }
})

export default store