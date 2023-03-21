import { Router } from "express";
import { addQuestionComment, deleteQuestionComment, getQuestionComments } from "../controller/question-comment.controllers";


const questionCommentRouter = Router()

questionCommentRouter.get('/:id', getQuestionComments);

questionCommentRouter.post('/:id', addQuestionComment);

questionCommentRouter.delete('/:id', deleteQuestionComment);

export default questionCommentRouter