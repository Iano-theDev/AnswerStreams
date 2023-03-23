import { Router } from "express";
import { addAnswerComment, deleteAnswerComment, getAnswerComments } from "../controller/answer-comment.controllers";
import { verifyToken } from "../middlewares/verifyTokens";

const answerCommentRouter = Router()

answerCommentRouter.get('/:id', getAnswerComments);

answerCommentRouter.post('/:id', addAnswerComment);

answerCommentRouter.delete('/:id', deleteAnswerComment);







export default answerCommentRouter