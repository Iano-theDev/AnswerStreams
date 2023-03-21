import { Router } from "express"
import { addAnswer, deleteAnswer, getAllAnswers, getQuestionAnswers, getSingleAnswer, getUserAnswers, updateAnswer } from "../controller/answer.controllers"

const answersRouter = Router()

answersRouter.get('', getAllAnswers);
answersRouter.post('/:id', addAnswer);
answersRouter.get('/:id', getSingleAnswer);
answersRouter.get('/question/:id', getQuestionAnswers);
answersRouter.get('/user/:id', getUserAnswers);
answersRouter.put('/:id', updateAnswer);
answersRouter.delete('/:id', deleteAnswer);



export default answersRouter