import { createReducer, on } from '@ngrx/store'
import { Question } from 'src/app/shared/models/question.model';
import * as QuestionActions from 'src/app/state/actions/questions.actions'

export interface QuestionsState {
    questions: Question[];
    loading: boolean;
    error: any;
}

export const initialState: QuestionsState = {
    questions: [],
    loading: false,
    error: null
}

export const questionReducer = createReducer (
    initialState,
    on(QuestionActions.loadQuestions, state => ({
        ...state,
        loading :true
    })),
    on(QuestionActions.loadQuestionsSuccess, (state, {questions}) => ({
        ...state,
        questions: [...questions],
        loading: false,
        error: null
    })),
    on(QuestionActions.loadQuestionsFailure, (state, { error}) => ({
        ...state,
        loading: false,
        error
    })),
    on(QuestionActions.addQuestion, (state, { question }) => {
        return {
            ...state,
            loading: true
        }
    }
    ),

    on(QuestionActions.addQuestionSuccess, (state, { question }) => {
        return {
            ...state,
            questions: [...state.questions, question]
        }
    }
    ),

    on(QuestionActions.addQuestionFailure, (state, { error }) => {
        return {
            ...state,
            error
        }
    }
    ),
);