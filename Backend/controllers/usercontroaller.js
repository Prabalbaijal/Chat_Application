import { User } from "../data_models/User.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
    try {
        const { name, username, password, confirmPassword, gender } = req.body
        if (!name || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All fields are requied!!" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" })
        }
        const user1 = await User.findOne({
            username
        })
        if (user1) {
            return res.status(400).json({ message: "Username already exists !!Try different" })
        }
        const hashedpass = await bcrypt.hash(password, 10)

        const maleprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        const user = await User.create({
            username,
            name,
            password: hashedpass,
            gender,
            profilepic: gender === "male" ? maleprofilepic : femaleprofilepic
        })
        const createdUser = await User.findById(user._id).select(
            "-password"
        )
        if (!createdUser) {
            return res.status(500).json({
                message: "Something wnet wrong while registering the user!!"
            })
        }
        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
            user: createdUser
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password)
            return res.status(400).json({ message: "Please fill all the required fields." })
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({
                message: "Invalid user!!",
                success: false
            })
        }
        const MatchPassword = await bcrypt.compare(password, user.password)
        if (!MatchPassword) {
            return res.status(400).json({
                message: "Incorrect Password!!",
                success: false
            })
        }
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        return res.status(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        })
            .json({
                _id: user._id,
                username: user.username,
                name: user.name,
                profilepic: user.profilepic
            })

    } catch (error) {
        console.log(error);
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged Out Successfully."
        })
    } catch (error) {
        console.error(error)
    }
}

export const otherUsers = async (req, res) => {
    try {
        const loggedUserId = req.id
        const allOtherUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password")
        return res.status(200).json(allOtherUsers)
    } catch (error) {
        console.log(error)
    }
}