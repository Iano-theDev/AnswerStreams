import { Router } from "express";
import {  deleteUser, getAllUsers, getUserById, logUserIn, registerUser, updateUser } from "../controller/user.controllers";


const userRouter = Router()

userRouter.post('/register', registerUser)

userRouter.post('/login', logUserIn)

userRouter.get('/:id', getUserById)

userRouter.get('', getAllUsers)

userRouter.delete('/:id', deleteUser)

userRouter.put('/:id', updateUser)



export default userRouter