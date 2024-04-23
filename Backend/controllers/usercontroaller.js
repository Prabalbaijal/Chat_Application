import { User } from "../data_models/User.js"
import bcrypt from 'bcryptjs'

export const register=async(req,res)=>{
    try {
        const {name,username,password,confirmPassword,gender}=req.body
        if(!name || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are requied!!"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({message:"Passwords do not match"})
        }
        const user1=await User.findOne({username})
        if(user1){  
            return res.status(400).json({message:"Username already exists !!Try different"})
        }
        const hashedpass=await bcrypt.hash(password,10)

        const maleprofilepic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleprofilepic=`https://avatar.iran.liara.run/public/girl?username=${username}`


        await User.create({
            username,
            name,
            password:hashedpass,
            gender,
            profilepic:gender === "male" ? maleprofilepic : femaleprofilepic
        })
        return res.status(201).json({
            message:"Account created successfully.",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}