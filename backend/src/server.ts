import express, { json } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { checkConnection } from './config/config';



const app = express();

app.listen(4000, ()=>{
    console.log('server running')
})

checkConnection()

