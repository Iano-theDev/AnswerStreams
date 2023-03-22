import { createFeatureSelector, createSelector } from '@ngrx/store'
import { QuestionsState } from '../reducers/questions.reducers'

export const selectQuestionState = createFeatureSelector<QuestionsState>('questions');

export const selectQuestions = createSelector(
    selectQuestionState,
    (state: QuestionsState) => state.questions
);

export const selectQuestionsLoading = createSelector(
    selectQuestionState,
    (state: QuestionsState) => state.loading
);

export const selectQuestionsError = createSelector(
    selectQuestionState,
    (state: QuestionsState) => state.error
);