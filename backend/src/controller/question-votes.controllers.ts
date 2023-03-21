import { v4 as uid } from "uuid"
import mssql from "mssql"
import { sqlConfig } from "../config/config"
import { RequestHandler, Request, Response } from "express";

// upVote a question
export async function upVote(req: Request, res: Response) {
    try {
        //check if the vote already exists
        const questionId = req.params.id
        const { userId } = req.body
        const pool = await mssql.connect(sqlConfig)
        const voteId = await (await pool.request()
            .input('questionId', questionId)
            .input('userId', userId)
            .execute('spGetQuestionVoteId')).recordset[0]

        if (voteId) {
            const vote = await (await pool.request()
                .input('voteId', voteId.voteId)
                .input('userId', userId)
                .input('questionId', questionId)
                .execute('spIncrementQuestionVote')).recordset
        }

        if (voteId === undefined) {
            const voteId = uid();
            const vote = await (await pool.request()
                .input('voteId', voteId)
                .input('userId', userId)
                .input('questionId', questionId)
                .execute('spIncrementQuestionVote')).recordset
        }

        return res.status(200).json({ message: `user ${userId} upoted question ${questionId}` })

    } catch (error: any) {
        return res.status(404).json(error.message)
    }
}


// upVote a question
export async function downVote(req: Request, res: Response) {
    try {
        //check if the vote already exists
        const questionId = req.params.id
        const { userId } = req.body
        const pool = await mssql.connect(sqlConfig)
        const voteId = await (await pool.request()
            .input('questionId', questionId)
            .input('userId', userId)
            .execute('spGetQuestionVoteId')).recordset[0]

        if (voteId) {
            const vote = await (await pool.request()
                .input('voteId', voteId.voteId)
                .input('userId', userId)
                .input('questionId', questionId)
                .execute('spDecrementQuestionVote')).recordset
        }

        if (voteId === undefined) {
            const voteId = uid();
            const vote = await (await pool.request()
                .input('voteId', voteId)
                .input('userId', userId)
                .input('questionId', questionId)
                .execute('spDecrementQuestionVote')).recordset
        }

        return res.status(200).json({ message: `user ${userId} downvoted question ${questionId}` })

    } catch (error: any) {
        return res.status(404).json(error.message)
    }
}

// get vote-count for a question
export const getQuestionVotes: RequestHandler = async (req, res) => {
    try {
        const questionId = req.params.id
        const pool = await mssql.connect(sqlConfig)
        const questionVote = await (await pool.request()
            .input('questionId', questionId)
            .execute('spGetQuestionVoteCount')).recordset
        return res.status(200).json(questionVote)
    } catch (error: any) {
        res.status(404).json(error.message)
    }
}
