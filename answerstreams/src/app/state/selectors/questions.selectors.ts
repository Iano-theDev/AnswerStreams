import { createFeatureSelector, createSelector } from '@ngrx/store'
import { QuestionsState } from '../reducers/questions.reducers'

export const selectQuestionState = createFeatureSelector<QuestionsState>('questions');

export const selectQuestions = createSelector(
    selectQuestionState,
    state => state.questions
);