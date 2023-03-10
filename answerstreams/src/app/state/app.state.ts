import { Answer } from "../shared/models/answer.model";
import { Question } from "../shared/models/question.model";
import { User } from "../shared/models/user.model";

export interface AppSate {
    questions: Question[];
    answers: Answer[];
    comments: User[];
    currentUser: User | null;
}