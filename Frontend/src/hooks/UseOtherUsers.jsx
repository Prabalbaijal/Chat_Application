import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setAuthUser, setOtherUsers } from '../redux/userslice'

function useOtherUsers() {
    const dispatch=useDispatch()
   useEffect(()=>{
        const getOtherUsers=async ()=>{
            try{
                axios.defaults.withCredentials=true
                const res=await axios.get('http://localhost:7000/api/v1/user')
                dispatch(setOtherUsers(res.data))
            }catch(error){
                console.log(error)
            }
        }
        getOtherUsers()
   },[])
}

export default useOtherUsers
