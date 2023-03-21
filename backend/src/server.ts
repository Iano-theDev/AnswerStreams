import express, { json } from 'express'
import { checkConnection } from './config/config';
import questionsRouter from './router/questionRoutes';
import answersRouter from './router/answerRoutes';
import questionCommentRouter from './router/question-commentRouter';
import answerCommentRouter from './router/answer-commentRouter';
import answerVoteRouter from './router/answer-voteRouter';
import questionVoteRouter from './router/question-votesRouter';



const app = express();


app.use(json())

app.use('/questions', questionsRouter);

app.use('/answers', answersRouter);

app.use('/q-comments', questionCommentRouter)

app.use('/a-comments', answerCommentRouter)

app.use('/a-votes', answerVoteRouter)

app.use('/q-votes', questionVoteRouter)



app.listen(4000, ()=>{
    console.log('server running')
})

// checkConnection()

