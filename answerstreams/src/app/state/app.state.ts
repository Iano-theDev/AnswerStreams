import { Answer } from "../shared/models/answer.model";
import { Question } from "../shared/models/question.model";
import { User } from "../shared/models/user.model";
import { QuestionsState } from "./reducers/questions.reducers";

// export interface AppState {
//     questions: Question[];
//     answers: Answer[];
//     comments: User[];
//     currentUser: User | null;
// }

export interface AppState {
    questions: QuestionsState;   
}