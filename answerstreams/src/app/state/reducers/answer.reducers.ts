import { createReducer,on  } from "@ngrx/store";
import { Answer } from "src/app/shared/models/answer.model";
import * as AnswerActions from "../actions/answer.actions"


export interface AnswerState {
    answers: Answer[];
    loading: boolean;
    error: any;
}

export const initialState: AnswerState = {
    answers: [],
    loading: false,
    error: null
}

export const answerReducer = createReducer (
    initialState,
    on(AnswerActions.loadAnswers, state => ({
        ...state,
        loading: true
    })),
    on(AnswerActions.loadAnswersSuccess, (state, {answers}) => ({
        ...state,
        answers: [...answers],
        loading: false,
        error: null
    })),
    on(AnswerActions.loadAnswersFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
)