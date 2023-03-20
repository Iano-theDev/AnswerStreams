import { RequestHandler, Request, Response } from "express";
import mssql from "mssql";
import {v4 as uid} from 'uuid'
import { sqlConfig } from "../config/config";
import QuestionModel from "../models/question.model";


interface ExtendedRequest extends Request {
    body: {
        questionId: string;
        userId: string;
        title: string;
        body: string;
        createdAt: string;
    },
    params: {
        id:string
    }
}



//get all questions
export const getAllQuestions: RequestHandler = async (req, res)=> {
    try {
        const pool = await mssql.connect(sqlConfig)
        const questions: QuestionModel[] = await ( await pool.request().execute('spGetAllQuestions')).recordset
        res.status(200).json(questions)
    } catch (error: any){
        res.status(404).json(error.message)
    }
}

// get single questions
export const getSingleQuestion=async(req:ExtendedRequest, res: Response)=>{
    try {
        const id = req.params.id
        const pool = await mssql.connect(sqlConfig)

        const question = await( await pool.request()
        .input('questionId', id)
        .execute('spGetQuestionByQuestionId')
        ).recordset[0]

        if(!question){
            res.status(404).json({error: 'question not found'})
        }

        res.status(200).json(question)
    } catch (error) {
        res.status(500).json(error)
    }
}


// add a question
export async function addQuestion(req:ExtendedRequest, res: Response) {
    try {
        const questionId = uid()
        const {title, body, userId} = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('questionId',questionId)
        .input('userId',userId)
        .input('title',title)
        .input('body', body)
        .execute('spCreateNewQuestion')
    
        res.status(201).json({message: 'question added to database'})
    } 
    catch (error:any) {
        res.status(404).json(error.message)
    }
}

// update a question 
export async function updateQuestion(req:ExtendedRequest, res:Response){
    try {
        const {questionId, title, body, userId} = req.body
        const pool = await mssql.connect(sqlConfig)
        const question:QuestionModel[] = await(await pool.request()
        .input('questionId',req.params.id)
        .execute('spGetQuestionByQuestionId')
        ).recordset[0]

        if(question) {
            await pool.request()
            .input('questionId',questionId)
            .input('title',title)
            .input('body', body)
            .execute('spUpdateQuestion')
            return res.status(200).json({message:'Resource updated successfully'})
        }
        return res.status(404).json({error:'question Not Found'})
    } 
    catch (error:any) {
        return res.status(500).json(error.message)
    }
}


// delete a question from the datatbsase

export const deleteQuestion=async(req:ExtendedRequest, res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)

        const question:QuestionModel[] = await(await pool.request()
        .input('questionId',req.params.id)
        .execute('spGetQuestionByQuestionId')
        ).recordset[0]

        if(question){    
        await pool.request().input('questionId',req.params.id).execute('spDeleteQuestionById')
        return res.status(200).json({message:'Deleted'})
        }
        return res.status(404).json({error:'Can\'t Delete, question Not Found'})
        
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}
