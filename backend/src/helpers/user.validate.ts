import Joi from "joi"

const userSchema = Joi.object({
    name: Joi.string().min(5).max(30).required(),
    userId: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
    occupation: Joi.string().required(),
    imageURL: Joi.string().required(),
    online: Joi.string().required(),
    createdsAt: Joi.string().required(),
})

const validatedUser = (user: UserModel) => {
    return userSchema.validate(user)
}

export default validatedUser