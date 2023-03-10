import { Answer } from "./answer.model";
import { Comment } from "./comment.model";
import { Question } from "./question.model";

export interface User {
    userId: string;
    name: string;
    email: string;
    occupation: string;
    online: boolean;
    questions: Question[];
    answers: Answer[];
    comments: Comment[];
    createdsAt: string;
}