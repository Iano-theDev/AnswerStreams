import { Answer } from "../shared/models/answer.model";
import { Question } from "../shared/models/question.model";
import { User } from "../shared/models/user.model";
import { AnswerState } from "./reducers/answer.reducers";
import { LoggedInUserState } from "./reducers/login.reducers";
import { QuestionsState } from "./reducers/questions.reducers";


export interface AppState {
    questions: QuestionsState;
    answers: AnswerState;
    loggedInUser: LoggedInUserState;
}