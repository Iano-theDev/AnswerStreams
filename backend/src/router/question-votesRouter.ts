import { Router } from "express";
import { downVote, getQuestionVotes, upVote } from "../controller/question-votes.controllers";

const questionVoteRouter = Router()

questionVoteRouter.post('/upVote/:id', upVote);

questionVoteRouter.post('/downVote/:id', downVote);

questionVoteRouter.get('/count/:id', getQuestionVotes);




export default questionVoteRouter