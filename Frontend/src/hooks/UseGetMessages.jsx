import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageslice'

function useGetMessages() {
        const {selectedUser}=useSelector(store=>store.user)
        const dispatch=useDispatch()
        useEffect(()=>{
            const getMessages=async ()=>{
                try{
                    axios.defaults.withCredentials=true
                    const res=await axios.get(`http://localhost:7000/api/v1/message/${selectedUser?._id}`)
                    dispatch(setMessages(res.data))
                }catch(error){
                    console.log(error)
                }
            }
            getMessages()
        },[selectedUser])
}

export default useGetMessages
