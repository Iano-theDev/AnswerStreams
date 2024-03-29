import { Answer } from "./answer.model";
import { Comment } from "./comment.model";

export interface Question {
    questionId: string;
    title: string;
    body: string;
    votes: number;
    answers: Answer[];
    comments: Comment[];
    userId: string;
    createdAt: string;
}
