import { Router } from "express";
import { downVote, getAnswerVotes, upVote } from "../controller/answer-votes.controllers";

const answerVoteRouter = Router()

answerVoteRouter.post('/upVote/:id', upVote);

answerVoteRouter.post('/downVote/:id', downVote);

answerVoteRouter.get('/count/:id', getAnswerVotes);



export default answerVoteRouter