import { Action, createReducer, on } from '@ngrx/store'
import * as QuestionActions from './questions.actions'
import { Question } from 'src/app/shared/models/question.model';
import { state } from '@angular/animations';

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
        questions,
        loading: false,
        error: null
    })),
    on(QuestionActions.loadQuestionsFailure, (state, { error}) => ({
        ...state,
        loading: false,
        error
    }))
);