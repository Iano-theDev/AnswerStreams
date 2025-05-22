import { RequestHandler, Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/config";
import {v4 as uid} from 'uuid';
import { AnswerModel } from "../models/answer.model";


interface ExtendedRequest extends Request {
    body: {
        answerId: string;
        userId: string;
        questionId: string;
        body: string;
        createdAt: string;
    },
    params: {
        id:string
    }
}

//get all answer
export const getAllAnswers: RequestHandler = async (req, res)=> {
    try {
        const pool = await mssql.connect(sqlConfig)
        const answer: AnswerModel[] = await ( await pool.request().execute('spGetAllAnswers')).recordset
        res.status(200).json(answer)
    } catch (error: any){
        res.status(404).json(error.message)
    }
}

// add a answer
export async function addAnswer(req:ExtendedRequest, res: Response) {
    try {
        const questionId = req.params.id
        const answerId = uid()
        const {userId, body} = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('answerId',answerId)
        .input('userId',userId)
        .input('questionId',questionId )
        .input('body', body)
        .execute('spCreateNewAnswer')
        res.status(201).json({message: 'answer added to database'})
    } 
    catch (error:any) {
        res.status(404).json(error.message)
    }
}

// get single answer
export const getSingleAnswer=async(req:ExtendedRequest, res: Response)=>{
    try {
        const id = req.params.id
        const pool = await mssql.connect(sqlConfig)

        const answer = await( await pool.request()
        .input('answerId', id)
        .execute('spGetAnswerByAnswerId')
        ).recordset[0]

        if(!answer){
            res.status(404).json({error: 'answer not found'})
        }

        res.status(200).json(answer)
    } catch (error) {
        res.status(500).json(error)
    }
}


// get answers to questions
export const getQuestionAnswers=async(req:ExtendedRequest, res: Response)=>{
    try {
        const id = req.params.id
        const pool = await mssql.connect(sqlConfig)

        const answer = await( await pool.request()
        .input('questionId', id)
        .execute('spGetAnswerByQuestionId')
        ).recordset

        if(!answer){
            res.status(404).json({error: 'there are currently no answers for this question'})
        }

        res.status(200).json(answer)
    } catch (error) {
        res.status(500).json(error)
    }
}

// get answers from a user
export const getUserAnswers=async(req:ExtendedRequest, res: Response)=>{
    try {
        const id = req.params.id
        const pool = await mssql.connect(sqlConfig)

        const answer = await( await pool.request()
        .input('userId', id)
        .execute('spGetAnswerByUserId')
        ).recordset

        if(!answer){
            res.status(404).json({error: 'there are currently no answers from this user'})
        }

        res.status(200).json(answer)
    } catch (error) {
        res.status(500).json(error)
    }
}

// update an answer 
export async function updateAnswer(req:ExtendedRequest, res:Response){
    try {
        const id = req.params.id
        const { answerId, body} = req.body
     
        const pool = await mssql.connect(sqlConfig)
        const answer:AnswerModel[] = await(await pool.request()
        .input('answerId', id)
        .execute('spGetAnswerByAnswerId')
        ).recordset[0]
        console.log(id)

        if(answer) {
            await pool.request()
                .input('answerId', id)
                .input('body', body)
                .execute('spUpdateAnswer')
            
            return res.status(200).json({message:'Answer updated successfully'})
        }
        return res.status(404).json({error:'could not update, answer Not Found'})
    } 
    catch (error:any) {
        return res.status(500).json(error.message)
    }
}

// delete an answer
export const deleteAnswer=async(req:ExtendedRequest, res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)

        const answer:AnswerModel[] = await(await pool.request()
        .input('answerId',req.params.id)
        .execute('spGetAnswerByAnswerId')
        ).recordset[0]

        if(answer){    
        await pool.request().input('answerId',req.params.id).execute('spDeleteAnswerById')
        return res.status(200).json({message:'Deleted'})
        }
        return res.status(404).json({error:'Can\'t Delete, Answer Not Found'})
        
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}
