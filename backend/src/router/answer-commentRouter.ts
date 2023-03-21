import { Router } from "express";
import { addAnswerComment, deleteAnswerComment, getAnswerComments } from "../controller/answer-comment.controllers";

const answerCommentRouter = Router()

answerCommentRouter.get('/:id', getAnswerComments);

answerCommentRouter.post('/:id', addAnswerComment);

answerCommentRouter.delete('/:id', deleteAnswerComment);


export default answerCommentRouter