import {  createAction, props } from '@ngrx/store'
import { Answer } from 'src/app/shared/models/answer.model'

export const loadAnswers = createAction('[Answers] Load Answers');

export const loadAnswersSuccess = createAction(
    '[Answers] LoadAnswers Success',
    props<{answers: Answer[]}>()
);

export const loadAnswersFailure = createAction(
    '[Answers] Load Answers Failure',
    props<{error: any}>()
);

