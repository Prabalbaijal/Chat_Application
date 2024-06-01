import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../redux/messageslice"

const useGetRealTimeMsg=()=>{
    const {socket}=useSelector(store=>store.socket)
    const {messages}=useSelector(store=>store.message)
    const dispatch=useDispatch()
    useEffect(()=>{
        socket?.on("newMsg",(newMsg)=>{
            dispatch(setMessages([...messages,newMsg]))
        })
    },[socket,setMessages,messages])

}

export default useGetRealTimeMsg