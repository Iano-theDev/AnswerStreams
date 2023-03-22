import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AnswerState } from "../reducers/answer.reducers";



export const selectAnswerState = createFeatureSelector<AnswerState>('answers')


export const selectAnswers  = createSelector(
    selectAnswerState,
    (state: AnswerState) => state.answers
);

export const selectAnswersLoading = createSelector(
    selectAnswerState,
    (state: AnswerState) => state.loading
);

export const selectAnswerError = createSelector(
    selectAnswerState,
    (state: AnswerState) => state.error
);