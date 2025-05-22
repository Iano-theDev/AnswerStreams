import { RequestHandler, Request, Response } from "express"
import mssql from "mssql"
import { v4 as uid } from "uuid"
import { sqlConfig } from "../config/config"
import QuestionModel from "../models/question.model"
import QuestionCommentModel from  "../models/questionComment.model"

//get comments for a particular question
export const getQuestionComments: RequestHandler = async (req, res) => {
    try {
        const qId = req.params.id
        const pool = await mssql.connect(sqlConfig)
        const questionComments: QuestionCommentModel[] = await (await pool.request()
            .input('questionId', qId)
            .execute('spGetCommentByQuestionId')).recordset

        res.status(200).json(questionComments)
    } catch (error: any) {
        res.status(404).json(error.messsage)
    }
}

//add comment to question
export async function addQuestionComment(req: Request, res: Response) {
    try {
        const qId = req.params.id
        const commentId = uid()
        const { body, userId } = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
            .input('commentId', commentId)
            .input('questionId', qId)
            .input('body', body)
            .input('userId', userId)
            .execute('spCreateQuestionComment')

        res.status(200).json({ message: 'comment added successfully' })
    } catch (error: any) {
        res.status(404).json(error.message)
    }
}


//delete a question-comment
export const deleteQuestionComment: RequestHandler = async (req: Request, res: Response) => {
    try {
        const commentId = req.params.id
        const pool = await mssql.connect(sqlConfig)
        const questionComment: QuestionCommentModel[] = await (await pool.request()
            .input('commentId', commentId)
            .execute('spGetQuestionCommentById')
        ).recordset[0]

        if (questionComment) {
            await pool.request()
                .input('commentId', commentId)
                .execute('spDeleteQuestionCommentById')

            return res.status(200).json({ message: 'Comment deleted successfuly' })
        }
        return res.status(404).json({error:'No such comment found!'})

    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}
