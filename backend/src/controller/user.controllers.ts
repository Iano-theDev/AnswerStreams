import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import db from '../database-helpers/index.'
import path, { resolve } from 'path'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface ExtendedRequest extends Request {
    body: {
        name: string,
        email: string,
        password: string
    },
    params: {
        id: string
    }
}

//register
export const registerUser = async (req: ExtendedRequest, res: Response) => {
    try {
        const { name, email, password } = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = {
            id: uuid() as string,
            name: name as string,
            email: email as string,
            password: hashedPassword
        }

        if (db.checkConnection() as unknown as boolean) {
            const newUser: UserModel[] = await (await db.exec('spCreateNewUser', { userId: user.id, name: user.name, email: user.email, password: user.password }))

            console.log(newUser[0])

            if (newUser.length !== 0) {
                const token = jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: '1d' })
                res.status(201).json({ token, newUser })
            } else {
                res.status(422).json({ message: 'error creating user' })
            }

        } else {
            res.status(500).json({ message: 'Error connecting to database' })
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

// Log in User

export const logUserIn = async (req: ExtendedRequest, res: Response) => {
    try {
        const { email, password } = req.body
        if (db.checkConnection() as unknown as boolean) {
            const user = await db.exec('spGetUserByEmail', { email: email })
            if (user.length > 0) {
                const validPassword = await bcrypt.compare(password, user[0].password)

                if (validPassword) {
                    const token = jwt.sign(user[0], process.env.JWT_SECRET as string, { expiresIn: '1d' })
                    // res.status(201).json({ 'token': token, 'user': { id: user[0].id, name: user[0].name, email: user[0].email, isAdmin: user[0].isAdmin } })
                    res.status(201).json({ token, user })
                } else {
                    res.status(500).json({ message: 'Invalid password' })
                }
            } else {
                res.status(500).json({ message: 'Invalid email' })
            }
        } else {
            res.status(500).json({ message: 'Error connecting to database' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get user
export const getUserById = async (req: ExtendedRequest, res: Response) => {
    try {
        const id = req.params.id
        if (db.checkConnection() as unknown as boolean) {
            const user: UserModel[] = await db.exec('spGetUserByUserId', { userId: id }) as unknown as UserModel[]
            if (user) {
                res.status(200).json({ id: user[0].userId, name: user[0].name, email: user[0].email, isAdmin: user[0].role })
            } else {
                res.status(404).json({ message: 'User found' })
            }
        } else {
            res.status(500).json({ message: 'Error connecting to database' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update a user
export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { email, name, occupation, imageURL } = req.body

        if (db.checkConnection() as unknown as boolean) {
            const existingUser: UserModel[] = await db.exec('spGetUserByUserId', { userId: id })
            if (existingUser.length > 0) {
                const newUser = {
                    email: email,
                    name: name,
                    occupation: occupation,
                    imageURL: imageURL
                }

                // const salt = await bcrypt.genSalt(10)
                // newUser.password = await bcrypt.hash(newUser.password, salt)        

                const updatedUser = await db.exec('spUpdateUser', newUser)

                if (updatedUser) {
                    res.status(201).json({ message: 'User updated successfully', updatedUser })
                } else {
                    res.status(422).json({ message: 'Error updating user!' })
                }
            } else {
                res.status(404).json({ message: 'User Not Found' })
            }
        } else {
            res.status(500).json({ message: 'Error connecting to database' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get all users

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {
            const users: UserModel[] = await db.exec('spGetAllUsers', {})
            if (users.length > 0) {
                res.status(200).json(users)
            } else {
                res.status(200).json({ message: 'No users found' })
            }
        } else {
            res.status(500).json({ message: 'Error connecting to database' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Delete a user

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (db.checkConnection() as unknown as boolean) {
            const user: UserModel[] = await db.exec('spGetUserByUserId', { userId: id })

            if (user.length > 0) {
                await db.exec('spDeleteUser', { userId: user[0].userId })
                res.status(204).json({ message: 'User deleted successfully' })
            } else {
                res.status(404).json({ message: 'User Not Found' })
            }
        } else {
            res.status(500).json({ message: "Error connecting to database." })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}