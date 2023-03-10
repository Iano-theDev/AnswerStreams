import { createFeatureSelector, createSelector } from '@ngrx/store'
import { QuestionsState } from './questions.reducers'

export const selectQuestionState = createFeatureSelector<QuestionsState>('questions');

export const selectQuestions = createSelector(
    selectQuestionState,
    state => state.questions
);