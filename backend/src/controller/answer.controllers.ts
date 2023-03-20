import { RequestHandler, Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/config";

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

