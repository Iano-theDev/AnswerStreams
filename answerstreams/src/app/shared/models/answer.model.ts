import { Comment } from "./comment.model";

export interface Answer {
    answerId: string;
    questionId: string;
    userId: string;
    body: string;
    votes: number;
    comments: Comment[]
    createdAt: string;   
}