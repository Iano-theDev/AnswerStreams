import { v4 as uid } from "uuid"
import mssql from "mssql"
import { sqlConfig } from "../config/config"
import { RequestHandler, Request, Response } from "express";


// upVote an answer
export async function upVote(req: Request, res: Response) {
    try {
        //check if the vote already exists
        const answerId = req.params.id
        const { userId } = req.body
        const pool = await mssql.connect(sqlConfig)
        const voteId = await (await pool.request()
            .input('answerId', answerId)
            .input('userId', userId)
            .execute('spGetAnswerVoteId')).recordset[0]

        if (voteId) {
            const vote = await (await pool.request()
                .input('voteId', voteId.voteId)
                .input('userId', userId)
                .input('answerId', answerId)
                .execute('spIncrementAnswerVote')).recordset
        }

        if (voteId === undefined) {
            const voteId = uid();
            const vote = await (await pool.request()
                .input('voteId', voteId)
                .input('userId', userId)
                .input('answerId', answerId)
                .execute('spIncrementAnswerVote')).recordset
        }

        return res.status(200).json({ message: `user ${userId} upvoted answer ${answerId}` })

    } catch (error: any) {
        return res.status(404).json(error.message)
    }
}

// downVote an answer
export async function downVote(req: Request, res: Response) {
    try {
        //check if the vote already exists
        const answerId = req.params.id
        const { userId } = req.body
        const pool = await mssql.connect(sqlConfig)
        const voteId = await (await pool.request()
            .input('answerId', answerId)
            .input('userId', userId)
            .execute('spGetAnswerVoteId')).recordset[0]

        if (voteId) {
            const vote = await (await pool.request()
                .input('voteId', voteId.voteId)
                .input('userId', userId)
                .input('answerId', answerId)
                .execute('spDecrementAnswerVote')).recordset
        }

        if (voteId === undefined) {
            const voteId = uid();
            const vote = await (await pool.request()
                .input('voteId', voteId)
                .input('userId', userId)
                .input('answerId', answerId)
                .execute('spDecrementAnswerVote')).recordset
        }

        return res.status(200).json({ message: `user ${userId} downvoted answer ${answerId}` })

    } catch (error: any) {
        return res.status(404).json(error.message)
    }
}

// get vote-count for an answer
export const getAnswerVotes: RequestHandler = async (req, res) => {
    try {
        const answerId = req.params.id
        const pool = await mssql.connect(sqlConfig)
        const answerVote = await (await pool.request()
            .input('answerId', answerId)
            .execute('spGetAnswerVoteCount')).recordset
        return res.status(200).json(answerVote)
    } catch (error: any) {
        res.status(404).json(error.message)
    }
}
