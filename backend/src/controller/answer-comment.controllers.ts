import  { RequestHandler, Request, Response } from "express"
import mssql from "mssql"
import { v4 as uid } from "uuid"
import { sqlConfig } from "../config/config"
import AnswerCommentModel from "../models/answerComment.model"

//get comments for a particular answer
export const getAnswerComments: RequestHandler = async(req, res)=>{
    try {
        const aId = req.params.id
        const pool = await mssql.connect(sqlConfig)
        const answerComments: AnswerCommentModel[] = await( await pool.request()
        .input('answerId', aId)
        .execute('spGetCommentByAnswerId')).recordset

        res.status(200).json(answerComments)
    } catch (error: any){
        res.status(404).json(error.messsage)
    }
}

//add comment to answer
export async function addAnswerComment(req: Request, res: Response){
    try {
        const aId = req.params.id
        const commentId = uid()
        const { body, userId} = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('commentId', commentId)
        .input('answerId', aId)
        .input('body', body)
        .input('userId', userId)
        .execute('spCreateAnswerComment')

        res.status(200).json({message: 'comment added successfully'})
    } catch (error:any) {
        res.status(404).json(error.message)
    }
} 

//delete a question-comment
export const deleteAnswerComment: RequestHandler = async (req: Request, res: Response) => {
    try {
        const commentId = req.params.id
        const pool = await mssql.connect(sqlConfig)
        const answerComment: AnswerCommentModel[] = await (await pool.request()
            .input('commentId', commentId)
            .execute('spGetAnswerCommentById')
        ).recordset[0]

        if (answerComment) {
            await pool.request()
                .input('commentId', commentId)
                .execute('spDeleteAnswerCommentById')

            return res.status(200).json({ message: 'Comment deleted successfuly' })
        }
        return res.status(404).json({error:'No such comment found!'})

    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}