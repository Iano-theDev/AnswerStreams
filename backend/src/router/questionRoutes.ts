import { Router } from "express"

import { addQuestion, deleteQuestion, getAllQuestions, getSingleQuestion, updateQuestion } from "../controller/question.controllers"
import { verifyToken } from "../middlewares/verifyTokens";

const questionsRouter = Router()

questionsRouter.get('', getAllQuestions);

questionsRouter.get('/:id', getSingleQuestion)

questionsRouter.post('', addQuestion)

questionsRouter.put('/:id', updateQuestion)

questionsRouter.delete('/:id', deleteQuestion)




export default questionsRouter
