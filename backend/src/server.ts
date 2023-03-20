import express, { json } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { checkConnection } from './config/config';
import productsRouter from './router/questionRoutes';
import questionsRouter from './router/questionRoutes';



const app = express();


app.use(json())

app.use('/questions', questionsRouter);



app.listen(4000, ()=>{
    console.log('server running')
})

// checkConnection()

